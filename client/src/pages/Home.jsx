import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import "./Home.scss";
import { Box, Grid, Typography } from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import "../components/HomeHeader.scss";

const Home = () => {
  const cat = useLocation().search;
  const {
    isLoading,
    isError,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts", cat],
    queryFn: () => getPosts(cat),
    select: ({ data }) => data,
  });

  return (
    <section className="home">
      <HomeHeader />
      <Box className="container posts" id="posts">
        <Grid container columnSpacing={3} rowSpacing={3}>
          {isLoading && "Loading..."}
          {isError && error.message}
          {!isLoading &&
            !isError &&
            posts.map((post) => (
              <Grid item xs={4} key={post._id}>
                <Box
                  className="post-card"
                  style={{ backgroundImage: `url(${post.img})` }}
                >
                  <Box className="post-info">
                    <Link className="link" to={`/post/${post._id}`}>
                      <Typography variant="h5" component="h2">
                        {post.title}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Home;
