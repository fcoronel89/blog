import React from "react";
import { Link } from "react-router-dom";
import useSignUpForm from "../hooks/useSignUpForm";
import './Auth.scss'
import { Button, Typography } from "@mui/material";

const Register = () => {
  const { register, handleSubmit, errors } = useSignUpForm();

  return (
    <div className="login">
      <Typography variant="h3" component="h1" mb={3}>Registrar</Typography>
      <form onSubmit={handleSubmit}>
        <input {...register("userName")} type="text" placeholder="Nombre de usuario" />
        {errors.userName && <p>{errors.userName.message}</p>}
        <input {...register("email")} type="email" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="Contraseña"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button variant="contained" type="submit">
          Crear
        </Button>
        {errors.general && <p>{errors.general.message}</p>}
        <span>
          ¿Posees una cuenta? <Link to="/login">Ingresar</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
