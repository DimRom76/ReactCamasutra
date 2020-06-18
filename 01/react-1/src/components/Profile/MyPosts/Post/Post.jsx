import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.img}
        src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
      ></img>
      <div>{props.message}</div>
      <span>LIKE</span>
      {props.likesCount}
    </div>
  );
};

export default Post;
