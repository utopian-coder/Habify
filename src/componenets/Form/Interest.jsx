import React from "react";
import CheckBox from "./UI/CheckBox";
import classes from "./Interest.module.css";

const INTEREST = [
  "Select All",
  "Mental Health",
  "MH Tips",
  "Support",
  "Enabler",
  "Exchange",
  "Art",
  "Socials",
  "Random",
  "Music",
  "Science",
  "Pets",
  "Education",
  "Video",
  "Q&As",
];

const styles = {
  width: "9rem",
};

function Interest() {
  return (
    <div className={classes["interests-container"]}>
      <p>Catagories I'm interested in</p>
      <div className={classes.interests}>
        {INTEREST.map((curr) => (
          <CheckBox key={curr} val={curr} styles={styles} />
        ))}
      </div>
    </div>
  );
}

export default Interest;
