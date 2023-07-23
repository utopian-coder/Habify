import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <p>Already have an account?</p>
        <a href='#'>Sign In</a>
      </nav>
    </header>
  );
}

export default Header;
