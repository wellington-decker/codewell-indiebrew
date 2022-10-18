import React from "react";
import classes from "./mobilenav.module.css";
import { Link } from "react-router-dom";
import { X } from "phosphor-react";

const MobileNav = (props) => {
  return (
    <div className={`${classes.mobile_nav} ${classes.display}`}>
      <div>
        <Link to="/sign-up">
          <button className={classes.get_started__btn}>
            Get Started <span className={classes.free}>- it's free</span>
          </button>
        </Link>
        <p className={classes.bye}>Ok, Bye.</p>
      </div>
      <div className={classes.exit} onClick={props.onClick}>
        <X size={32} color="#fffdff" weight="bold" />
      </div>
    </div>
  );
};

export default MobileNav;
