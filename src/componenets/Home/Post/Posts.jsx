import React from "react";
import classes from "./Posts.module.css";
import PostSummary from "./PostSummary";

const POSTS = [
  {
    title: "Title",
    catagory: "Catagory",
    users: "Users",
    replies: "Replies",
    views: "Views",
    activity: "Activity",
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
  },

  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
  },
];

function Posts() {
  return (
    <section className={classes["posts-container"]}>
      {POSTS.map((post) => (
        <PostSummary post={post} />
      ))}
    </section>
  );
}

export default Posts;
