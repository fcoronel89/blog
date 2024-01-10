import React from "react";
import { frontendUrl } from "../utils/helpers";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {
  const categoryId = cat.id ? `?cat=${cat.id}` : "";
  const {
    isLoading,
    isError,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts", categoryId],
    queryFn: () => getPosts(categoryId),
    select: ({ data }) => {
      return data.map((post) => {
        const date = new Date(post.date);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const formattedDate = date.toLocaleDateString("es-ES", options);
        return {
          ...post,
          date: formattedDate,
        };
      });
    },
  });

  console.log(posts);

  return (
    <Box className="menu">
      <Typography variant="h5" component="h2">Posts de {cat.description}</Typography>
      {isLoading && "Loading..."}
      {isError && error.message}
      {!isLoading &&
        !isError &&
        posts.map((post) => (
          <div className="post" key={post._id}>
            <img src={frontendUrl + post.img} alt="" />
            <Typography variant="h6" component={Link} to={`/post/${post._id}`}>{post.title}</Typography>
            <Typography variant="span" component="span">{post.date}</Typography>
          </div>
        ))}
    </Box>
  );
};

export default Menu;
