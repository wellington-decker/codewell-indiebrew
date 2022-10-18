import classes from "./customize.module.css";
import { ArrowRight } from "phosphor-react";
import socials from "../../../Assets/Social Media Icons.png";
import { Link } from "react-router-dom";


const Customize = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.customize_feed}>
        <div className={classes.socials_img}>
          <img src={socials} alt={props.attr1} />
        </div>
        <div className={classes.customize_txts}>
          <p className={classes.customize_txts__header}>Curate your feed from dozens of resources.</p>
          <p className={classes.customize_txts__paragraph}>We cover all major platforms where one could want to curate their feed from. Reddit, ProductHunt, IndieHackers, and so much more.</p>
          <Link to="/" className={classes.customize_link}>
              <p>See full list of resources</p>
              <ArrowRight size={12} color="#6466dd" weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Customize;
