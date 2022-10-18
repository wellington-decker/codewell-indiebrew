import React, { useState } from "react";
import Main from "../Main/main";
import Customize from "../Sections/Customize/customizeFeed";
import Access from "../Sections/Access/accessFeed";
import Footer from "../Footer/footer";
import Nav from "../Nav/nav";
import MobileNav from "../Nav/Mobile Nav/mobilenav";

const Home = () => {
  const [isShown, setIsShown] = useState(false);

  const showNav = () => {
    setIsShown(true);
  };

  const closeNav = () => {
    setIsShown(false);
  };

  //This comment shows how to communicate pass data from child to parent component.
  // const [openNav, setOpenNav] = useState(false);

  // const openMenuHandler = (whattodo) => {
  //   const item = {
  //     ...whattodo
  //   }

  //   console.log(item);
  // }

  return (
    <>
      <Nav onClick={showNav} />
      {isShown && <MobileNav onClick={closeNav} />}
      <Main attribute="mockup of a tablet" />
      <Customize attr1="different social media icons" />
      <Access attr1="a phone mockup" />
      <Footer />
    </>
  );
};

export default Home;
