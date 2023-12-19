import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { apiUrl } from '../utils/helpers';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/posts';

const Menu = ({cat}) => {
  const category = cat ? `?cat=${cat}` : "";
  const { isLoading, isError, error, data: posts } = useQuery({
    queryKey: ["posts", category],
    queryFn: () => getPosts(category),
    select: ({data}) => data
  })

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {isLoading && "Loading..."}
        {isError && error.message}
        {!isLoading && !isError && posts.map((post) => (
          <div className="post" key={post._id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
          </div>
        ))}
    </div>
  )
}

export default Menu