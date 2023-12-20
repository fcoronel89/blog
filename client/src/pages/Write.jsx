import React from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller } from "react-hook-form";
import useCreatePostForm from "../hooks/useCreatePostForm";

const Write = () => {
  const { register, handleSubmit, errors, control } = useCreatePostForm();

  return (
    <form className="add" onSubmit={handleSubmit}>
      <div className="content">
        <input {...register("title")} type="text" placeholder="Title" />
        {errors.title && <p className="error">{errors.title.message}</p>}
        <div className="editorContainer">
          <Controller
            name="desc"
            control={control}
            render={({ field }) => (
              <ReactQuill
                className="editor"
                theme="snow"
                placeholder="Description"
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
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <label className="file" htmlFor="image.file">
            Upload Image
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
          <div className="buttons">
            <button>Save as a draft</button>
            <button type="submit">Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <label htmlFor="art">
              <Controller
                control={control}
                name="cat"
                render={({ field }) => (
                  <input
                    type="radio"
                    value="art"
                    checked={field.value === "art"}
                    onChange={() => field.onChange("art")}
                  />
                )}
              />
              Art
            </label>
          </div>
          <div className="cat">
            <label htmlFor="science">
              <Controller
                control={control}
                name="cat"
                render={({ field }) => (
                  <input
                    type="radio"
                    value="science"
                    checked={field.value === "science"}
                    onChange={() => field.onChange("science")}
                  />
                )}
              />
              science
            </label>
          </div>
          <div className="cat">
            <label htmlFor="technology">
              <Controller
                control={control}
                name="cat"
                render={({ field }) => (
                  <input
                    type="radio"
                    value="technology"
                    checked={field.value === "technology"}
                    onChange={() => field.onChange("technology")}
                  />
                )}
              />
              technology
            </label>
          </div>
          <div className="cat">
            <label htmlFor="cinema">
              <Controller
                control={control}
                name="cat"
                render={({ field }) => (
                  <input
                    type="radio"
                    value="cinema"
                    checked={field.value === "cinema"}
                    onChange={() => field.onChange("cinema")}
                  />
                )}
              />
              cinema
            </label>
          </div>
          <div className="cat">
            <label htmlFor="design">
              <Controller
                control={control}
                name="cat"
                render={({ field }) => (
                  <input
                    type="radio"
                    value="design"
                    checked={field.value === "design"}
                    onChange={() => field.onChange("design")}
                  />
                )}
              />
              design
            </label>
          </div>
          <div className="cat">
            <label htmlFor="food">
              <Controller
                control={control}
                name="cat"
                render={({ field }) => (
                  <input
                    type="radio"
                    value="food"
                    checked={field.value === "food"}
                    onChange={() => field.onChange("food")}
                  />
                )}
              />
              food
            </label>
          </div>
          {errors.cat && <p className="error">{errors.cat.message}</p>}
        </div>
      </div>
      {errors.general && <p className="error">{errors.general.message}</p>}
    </form>
  );
};

export default Write;
