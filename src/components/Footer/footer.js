import classes from "./footer.module.css";
import { Heart } from "phosphor-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.footer}>
        <h4>IndieBrew</h4>
        <p className={classes.footer_description}>
          With IndieBrew, get personal feeds from resources all around the web,
          including Reddit, HackerNews, and much more.
        </p>
        <p className={classes.footer_description}>
          Made with <Heart size={16} color="#303030" weight="fill" /> in the UK.
        </p>
      </div>

      <div className={classes.footer_route}>
        <div className={classes.footer_route__item}>
          <h4 className={classes.footer_route__header}>Sitemap</h4>
          <Link to="/" className={classes.link}>
            Homepage
          </Link>
          <Link to="/" className={classes.link}>
            Pricing
          </Link>
        </div>
        <div className={classes.footer_route__item}>
          <h4 className={classes.footer_route__header}>Resources</h4>
          <Link to="/" className={classes.link}>
            Support
          </Link>
          <Link to="/" className={classes.link}>
            Contact
          </Link>
          <Link to="/" className={classes.link}>
            FAQ
          </Link>
        </div>
        <div className={classes.footer_route__item}>
          <h4 className={classes.footer_route__header}>Company</h4>
          <Link to="/" className={classes.link}>
            About
          </Link>
          <Link to="/" className={classes.link}>
            Customers
          </Link>
          <Link to="/" className={classes.link}>
            Blog
          </Link>
        </div>
        <div className={classes.footer_route__item}>
          <h4 className={classes.footer_route__header}>Resources</h4>
          <Link to="/" className={classes.link}>
            HackerNews
          </Link>
          <Link to="/" className={classes.link}>
            Reddit
          </Link>
          <Link to="/" className={classes.link}>
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
