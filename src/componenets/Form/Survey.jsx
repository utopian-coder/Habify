import React from "react";
import classes from "./Survey.module.css";
import Select from "./UI/Select";

function Survey() {
  return (
    <div className={classes.survey}>
      <Select
        val='How old are you?'
        options={["select", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]}
      />
      <Select
        val='Who are you?'
        options={["select", "Male", "Female", "Others"]}
      />
      <Select
        val='Will you be friendly here?'
        options={["select", "Yes", "No"]}
      />
      <Select
        val='Where did you hear about us?'
        options={["select", "Youtube", "Social media", "From a friend"]}
      />
    </div>
  );
}

export default Survey;
