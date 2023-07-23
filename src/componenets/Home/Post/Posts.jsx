import React from "react";
import classes from "./Posts.module.css";
import PostSummary from "./PostSummary";

const POSTS = [
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
  },
  {
    title: "This is title",
    catagory: "Mental Health",
    users: "ABC",
    replies: "10",
    views: "10.2K",
    activity: "19m",
    tags: ["enabler", "mental health"],
    styles: {},
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
