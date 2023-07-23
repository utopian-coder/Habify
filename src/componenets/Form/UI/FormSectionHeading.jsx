import React from "react";
import classes from "./FormSectionHeading.module.css";

function FormSectionHeading({ heading }) {
  return (
    <div className={classes["section-heading"]}>
      <p>
        {heading}
        <span> (OPTIONAL)</span>
      </p>
    </div>
  );
}

export default FormSectionHeading;
