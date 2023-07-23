import React from "react";
import classes from "./Filters.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

function Filters() {
  return (
    <div className={classes.filters}>
      <a href='#' className={classes.btn}>
        All Catagories
        <RiArrowDropDownLine />
      </a>
      <a href='#' className={classes.btn}>
        Tags
        <RiArrowDropDownLine />
      </a>
      <a href='#'>Latest</a>
      <a href='#'>Unread</a>
      <a href='#'>Rising</a>
      <a href='#'>Most Liked</a>
      <a href='#'>Follow Feed</a>
    </div>
  );
}

export default Filters;
