import React from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller } from "react-hook-form";
import useCreatePostForm from "../hooks/useCreatePostForm";
import HeaderSection from "../components/UI/HeaderSection";
import { Box, Button, Typography } from "@mui/material";
import "./Write.scss";
import { categories } from "../utils/helpers";

const Write = () => {
  const { register, handleSubmit, errors, control } = useCreatePostForm();

  return (
    <>
      <HeaderSection cssClasses={"single-header"}>
        <Typography variant="h2" component="h1">
          Nuevo Post
        </Typography>
      </HeaderSection>
      <form className="new-post container" onSubmit={handleSubmit}>
        <div className="content">
          <input {...register("title")} type="text" placeholder="Titulo" />
          {errors.title && <p className="error">{errors.title.message}</p>}
          <div className="editorContainer">
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <ReactQuill
                  className="editor"
                  theme="snow"
                  placeholder="Detalle del post"
                  onChange={(value) => field.onChange(value)}
                  value={field.value}
                />
              )}
            />
          </div>
          {errors.desc && <p className="error">{errors.desc.message}</p>}
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publicar</h1>
            <Box display={"flex"} flexDirection={"column"} gap={0.7}>
              <span>
                <b>Estado:</b> Borrador
              </span>
              <span>
                <b>Visibilidad:</b> Publico
              </span>
              <label className="file" htmlFor="image.file">
                Subir Imagen
                <Controller
                  name="image.file"
                  control={control}
                  render={({ field }) => (
                    <input
                      style={{ display: "none" }}
                      id="image.file"
                      type="file"
                      onChange={(e) => field.onChange(e.target.files[0])}
                    />
                  )}
                />
                {errors.image?.file && (
                  <p className="error">{errors.image.file.message}</p>
                )}
              </label>
            </Box>
            <div className="buttons">
              <Button
                variant="outlined"
                size="small"
                className="button button-draft"
              >
                Guardar como borrador
              </Button>
              <Button type="submit" className="button button-publish">
                Publicar
              </Button>
            </div>
          </div>
          <div className="item">
            <h1>Provincia</h1>
            <Box className="categories-container">
              {categories.map((category) => (
                <Box className="cat" key={category.id}>
                  <label htmlFor={category.id}>
                    <Controller
                      control={control}
                      name="cat"
                      render={({ field }) => (
                        <input
                          type="radio"
                          value={category.id}
                          checked={field.value === category.id}
                          onChange={() => field.onChange(category.id)}
                        />
                      )}
                    />
                    {category.description}
                  </label>
                </Box>
              ))}
            </Box>

            {errors.cat && <p className="error">{errors.cat.message}</p>}
          </div>
        </div>
        {errors.general && <p className="error">{errors.general.message}</p>}
      </form>
    </>
  );
};

export default Write;
