import React from "react";
import classes from "./HomeHeader.module.css";
import Logo from "../../assets/Habify Assets/EFA_Registered Logo.png";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";

function HomeHeader() {
  return (
    <header className={classes.header}>
      <div className={classes["header-content"]}>
        <div className={classes.logo}>
          <img src={Logo} alt='company logo' />
        </div>
        <div className={classes.search}>
          <div className={classes["search-bar"]}>
            <CiSearch />
            <input type='text' placeholder='Search all forums' />
          </div>
          <div className={classes.topics}>
            <span>Topics</span>
            <RiArrowDropDownLine className={classes["drop-icon"]} />
          </div>
        </div>
        <div className={classes["profile-nav"]}>
          <div className={classes["latest-topics"]}>
            <span>Latest Topics</span>
            <GiHamburgerMenu className={classes.hamburger} />
          </div>
          <div className={classes.noification}>
            <IoMdNotificationsOutline />
          </div>
          <div className={classes.profile}>
            <div className={classes["profile-icon"]}>A</div>
            <span>imranbiswas</span>
            <RiArrowDropDownLine className={classes["drop-icon"]} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
