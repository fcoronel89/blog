// Login.js
import React from "react";
import { Link } from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";
import './Auth.scss'
import { Button, Typography } from "@mui/material";

const Login = () => {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm();

  return (
    <div className="login">
      <Typography variant="h3" component="h1" mb={3}>Ingresar</Typography>
      <form onSubmit={handleSubmit}>
        <input {...register("userName")} type="text" placeholder="Nombre de Usuario" />
        {errors.userName && <p>{errors.userName.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="Contraseña"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          Login
        </Button>
        {errors.general && <p>{errors.general.message}</p>}
        <span>
          ¿No tienes una cuenta? <Link to="/register">Crear</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
