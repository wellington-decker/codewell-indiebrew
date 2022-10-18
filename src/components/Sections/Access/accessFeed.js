import classes from "./access.module.css";
import phone from "../../../Assets/Phone Mockup.png";
import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";

const Access = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.access_feed}>
        <div className={classes.phone_img}>
          <img src={phone} alt={props.attr1} />
        </div>
        <div className={classes.access_txts}>
          <p className={classes.access_txts__header}>
            Access your feed from the comfort of your phone.
          </p>
          <p className={classes.access_txts__paragraph}>
            With native apps for both iOS and Android, accessing your curated
            content has never been easier.
          </p>
          <Link to="/" className={classes.access_link}>
            <p>Sign up for the waitlist</p>
            <ArrowRight size={12} color="#6466dd" weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Access;
