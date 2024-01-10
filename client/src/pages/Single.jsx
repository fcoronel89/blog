import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import { getTextFromHTML } from "../utils/helpers";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { deletePost, getPost } from "../api/posts";
import { queryClient } from "../main";
import HeaderSection from "../components/UI/HeaderSection";
import { Typography } from "@mui/material";
import { frontendUrl } from "../utils/helpers";
import './Single.scss';

const Single = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);

  const {
    isLoading,
    isError,
    error,
    data: post,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    select: ({ data }) => data,
  });

  const handleDelete = async () => {
    try {
      await deletePost(id);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(post);
  return (
    <>
      {isLoading && "Loading..."}
      {isError && error.message}
      {!isLoading && !isError && post && (
        <>
          <HeaderSection cssClasses={"single-header"}>
            <Typography variant="h2" component="h1">
              {post?.title}
            </Typography>
          </HeaderSection>
          <div className="single container">
            <div className="content">
              {post.img && <img src={frontendUrl + post.img} alt="" />}
              <div className="user">
                {post.userImg && <img src={post.userImg} alt="" />}
                <div className="info">
                  <span>{post.userName}</span>
                  <p>Posted {moment(post.date).fromNow()}</p>
                </div>
                {currentUser?.userName === post.userName && (
                  <div className="edit">
                    <Link to={`/write?edit=${id}`} state={post}>
                      <img src={Edit} alt="" />
                    </Link>
                    <img onClick={handleDelete} src={Delete} alt="" />
                  </div>
                )}
              </div>
              {getTextFromHTML(post.desc)}
            </div>
            <Menu cat={post.category} />
          </div>
        </>
      )}
    </>
  );
};

export default Single;
