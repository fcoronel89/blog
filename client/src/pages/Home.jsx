import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { getTextFromHTML } from "../utils/helpers";

const Home = () => {
  const cat = useLocation().search;
  const { isLoading, isError, error, data: posts } = useQuery({ 
    queryKey: ["posts", cat], 
    queryFn: () => getPosts(cat),
    select: ({data}) => data
  });

  
  return (
    <div className="home">
      <div className="posts">
        {isLoading && "Loading..."}
        {isError && error.message}
        {!isLoading && !isError && posts.map((post) => (
          <div className="post" key={post._id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post._id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getTextFromHTML(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
