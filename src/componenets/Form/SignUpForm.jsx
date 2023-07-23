import React from "react";
import classes from "./SignUpForm.module.css";
import BasicInfo from "./BasicInfo";
import FormSectionHeading from "./UI/FormSectionHeading";
import Privacy from "./Privacy";
import Survey from "./Survey";
import Socials from "./Socials";
import Interest from "./Interest";
import Terms from "./Terms";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <form className={`container ${classes["form-container"]}`}>
      <BasicInfo />
      <FormSectionHeading heading='Privacy Settings' />
      <Privacy />
      <FormSectionHeading heading='Small Survey' />
      <Survey />
      <FormSectionHeading heading='Link Social Networks' />
      <Socials />
      <FormSectionHeading heading='Interested Catagories' />
      <Interest />
      <Terms />
      <Link to='/home'>
        <button className={classes.btn}>Create New Account</button>
      </Link>
    </form>
  );
}

export default SignUpForm;
