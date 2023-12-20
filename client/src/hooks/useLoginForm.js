import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../context/authContext";
import { loginSchema } from "../lib/validationSchemas";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    if (!isValid) return;
    try {
      const res = await login(data);
      if (res.errors) {
        Object.keys(res.errors).forEach((key) => {
          setError(key, {
            type: "server",
            message: res.errors[key].message,
          });
        });
      } else {
        navigateTo("/");
      }
    } catch (err) {
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
    isValid,
  };
};

export default useLoginForm;
