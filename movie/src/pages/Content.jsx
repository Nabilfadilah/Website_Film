import React from "react";
import NavigationBar from "../components/layouts/NavigationBar";
import "../components/elements/LandingPage.css";
import Intro from "../components/layouts/Intro";
import Trending from "../components/layouts/Tranding";
import Superhero from "../components/layouts/Superhero";

const ContentPage = () => {
  return (
    <>
      {/* intro section */}
      <div className="myBG border shadow">
        <NavigationBar />
        <Intro />
      </div>

      {/* list TRADING */}
      <div className="trending">
        <Trending />
      </div>

      {/* list superhero */}
      <div className="superhero">
        <Superhero />
      </div>
    </>
  );
};

export default ContentPage;
