import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { register as registerUser } from "../api/auth";
import { signUpSchema } from "../lib/validationSchemas";

const useSignUpForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    if (!isValid) return;
    console.log(data);
    try {
      const res = await registerUser(data);
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
      reset();
      setError("general", {
        type: "server",
        message: err.response.data.message,
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};

export default useSignUpForm;
