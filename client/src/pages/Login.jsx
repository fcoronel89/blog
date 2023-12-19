// Login.js
import React from "react";
import { Link } from "react-router-dom";
import useLoginForm from "../hooks/useLoginForm";

const Login = () => {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm();

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input {...register("userName")} type="text" placeholder="userName" />
        {errors.userName && <p>{errors.userName.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
        {errors.general && <p>{errors.general.message}</p>}
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
