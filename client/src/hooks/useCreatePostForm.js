import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost, updatePost } from "../api/posts";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";
import { postSchema } from "../lib/validationSchemas";
import { apiUrl } from "../utils/helpers";
import axios from "axios";
import moment from "moment";

const useCreatePostForm = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    control,
  } = useForm({
    defaultValues: {
      title: state?.title || "",
      desc: state?.desc || "",
      cat: state?.cat || "",
    },
    resolver: zodResolver(postSchema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: state ? updatePost : createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      setError("general", {
        type: "server",
        message: err.response.data.message,
      });
    },
  });

  const upload = async (file) => {
    try {
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${apiUrl}/upload`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (data) => {
    if (!isValid) return;

    const imgUrl = data.image
      ? "uploads/" + (await upload(data.image.file))
      : state.img || "";

    const postData = {
      title: data.title,
      desc: data.desc,
      category: data.cat,
      img: imgUrl,
    };

    if (state) {
      mutate({ ...postData, id: state._id });
    } else {
      mutate({
        ...postData,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
    control,
  };
};
export default useCreatePostForm;
