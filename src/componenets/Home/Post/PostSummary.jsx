import React from "react";
import classes from "./PostSummary.module.css";

function PostSummary({ post, styles }) {
  const { title, catagory, users, replies, views, activity, tags } = post;

  return (
    <article className={classes["post-summary"]} style={styles}>
      <div className={classes.title}>
        {title}
        <div className={classes.tags}>
          {tags && tags.map((tag) => <span>{tag}</span>)}
        </div>
      </div>
      <div>{catagory}</div>
      <div>{users}</div>
      <div className={classes.reply}>{replies}</div>
      <div>{views}</div>
      <div>{activity}</div>
    </article>
  );
}

export default PostSummary;
