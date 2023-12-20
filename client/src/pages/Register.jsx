import React from "react";
import { Link } from "react-router-dom";
import useSignUpForm from "../hooks/useSignUpForm";

const Register = () => {
  const { register, handleSubmit, errors } = useSignUpForm();

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input {...register("userName")} type="text" placeholder="userName" />
        {errors.userName && <p>{errors.userName.message}</p>}
        <input {...register("email")} type="email" placeholder="email" />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Register</button>
        {errors.general && <p>{errors.general.message}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
