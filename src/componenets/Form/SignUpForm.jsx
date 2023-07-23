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
import Logo from "./../../assets/Habify Assets/EFA_Registered Logo.png";

function SignUpForm() {
  return (
    <form className={`container ${classes["form-container"]}`}>
      <div className={classes.welcome}>
        <div>
          <img src={Logo} alt='company logo' />
        </div>
        <div>
          <h4>Create Emotional First-Aid Enabler Account</h4>
          <p>
            By signing up you can start posting, replying to topics, earn
            badges, favorites, vote topics and many more.
          </p>
        </div>
      </div>
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
