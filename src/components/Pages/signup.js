import { Link } from "react-router-dom";
import { Balloon, Money, LightbulbFilament } from "phosphor-react";
import back from "../../Assets/Back Arrow.svg";
import classes from "./signup.module.css";
import logo from "../../Assets/Logo.svg";
import Input from "../UI/input";

const Signup = (props) => {
  return (
    <>
      <header className={classes.container}>
        <nav>
          <div className={classes.logo}>
            <img src={logo} alt={props.attr1} />
          </div>
          <div className={classes.back_to_homepage}>
            <Link to="/">
              <div className={classes.back_img}>
                <img src={back} alt={props.attr2} />
              </div>
            </Link>
            <p className={classes["back-to-homepage__text"]}>Back to hompage</p>
          </div>
        </nav>
      </header>

      <main className={classes.container}>
        <div className={classes.signup_content}>
          <p>Create your personalized feed.</p>
          <div className={classes.content}>
            <Balloon
              className={classes.icon}
              size={36}
              color="#ef2525"
              weight="fill"
            />
            <p>
              <span className={classes.highlight}>Over 20 resources.</span> With
              resources ranging from Reddit to IndieHackers, we've got all your
              needs covered.
            </p>
          </div>
          <div className={classes.content}>
            <Money
              className={`${classes.icon_money} ${classes.icon}`}
              size={36}
              color="#363535"
              weight="light"
            />
            <p>
              <span className={classes.highlight}>Delivered weekly. </span>{" "}
              Every week at week exactly Tuesday 12:00 P.M EST - expect a
              value-packed digest right in your email.
            </p>
          </div>
          <div className={classes.content}>
            <LightbulbFilament
              className={classes.icon}
              size={36}
              color="#fffa68"
              weight="fill"
            />
            <p>
              <span className={classes.highlight}>Unlimited ideas.</span>{" "}
              Withall the ideas you'll be reading about, what's stopping you
              from creating a sustainable startup?
            </p>
          </div>
        </div>
        <form>
          <h4>Create your IndieBrew Account</h4>
          <div>
            <Input
              inputtype="input"
              type="email"
              name="email"
              label="Email"
              placeholder="john@example.com"
              required
            />

            <Input
              inputtype="input"
              type="text"
              name="name"
              label="Full Name"
              placeholder="John Doe"
              required
            />
            <Input
              inputtype="input"
              type="password"
              name="password"
              label="Password"
              placeholder="At least 8 characters"
              required
            />
            <div className={classes.checkbox_cont}>
              <input type="checkbox" name="checkbox" />
              <p>
                By creating an account on IndieBrew, you agree to the{" "}
                <Link to="/" className={classes.terms_condition}>
                  Terms & Conditions.
                </Link>
              </p>
            </div>
          </div>
          <button className={classes.create_acct__btn}>
            Create an Account
          </button>
        </form>
      </main>
    </>
  );
};

export default Signup;
