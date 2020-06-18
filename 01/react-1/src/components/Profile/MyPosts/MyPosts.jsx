import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi", likesCount: 12 },
    { id: 2, message: "Как дела", likesCount: 11 },
    { id: 3, message: "It's my text", likesCount: 5 },
  ];

  let postEl = postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postEl}</div>
    </div>
  );
};

export default MyPosts;
