import feed from "../../Assets/Feed Mockup.png";
import avatars from "../../Assets/User Avatars.svg";
import classes from "./main.module.css";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <main className={classes.container}>
      <div className={classes.intro}>
        <div className={classes.mockup}>
          <img src={feed} alt={props.attr1} />
        </div>
        <div>
          <div className={classes.intro_text}>
            <p className={classes.intro_text__header}>
              Your weekly personal feed digest.
            </p>
            <p className={classes.intro_text__paragraph}>
              With IndieBrew, get personal feeds from resources all around the
              web, including Reddit, HackerNews, IndieHackers, and much more.
            </p>
            <Link to="/sign-up">
              <button className={classes.get_started__btn}>
                Get Started <span className={classes.free}>- it's free</span>
              </button>
            </Link>
          </div>

          <div className={classes.avatars}>
            <img src={avatars} alt={props.attr2} />
          </div>
          <p className={classes.avatars_aft}>
            Join <span className={classes.join_thousands}>32,642</span>{" "}
            IndieBrewers in curating their personal digest.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
