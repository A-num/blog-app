import "./post.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
     {post.photo &&(
        <img className="postImg" src="{post.photo}" alt="img"/>
      )} 
     {/* <img className="postImg" src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg" alt="img"/>  */}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) =>
            <span className="postcat">{c.name}</span>
          )}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postdate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  )
}
