import React from "react";
import logo from "../../Assets/Logo.svg";
import { List } from "phosphor-react";
import classes from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  // const do_ = () => {
  //   let gbas = "kilofeshe"
  //   gbas = gbas + " gangan!";

  //   props.onClick(gbas);
  // }

  return (
    <header className={classes.container}>
      <nav>
        <div className={classes.logo}>
          <img src={logo} alt="the website's logo" />
        </div>
        <div className={classes["desktop-nav"]}>
          <Link className={classes["nav-item"]}>Pricing</Link>
          <Link className={classes["nav-item"]}>Support</Link>
          <Link to="/sign-up">
            <button className={classes.get_started__btn}>
              Get Started <span className={classes.free}>- it's free</span>
            </button>
          </Link>
        </div>

        <div className={classes.burger} onClick={props.onClick}>
          <List size={30} color="#000000" weight="bold" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
