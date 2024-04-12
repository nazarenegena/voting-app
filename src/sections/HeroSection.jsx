import React from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

import mobileApp from "../Images/mobile-app.png";
import OnlineVote from "../Images/online-vote.png";
import OnlineWorld from "../Images/online-worlds.png";

const HeroSection = () => {
  const { user } = useUserAuth();

  const navigate = useNavigate();

  const navigateDashboard = () => {
    if (!user) {
      return navigate("/login");
    } else {
      navigate("/dashboard");
    }
    console.log("in dashboard ?");
  };

  return (
    <>
      <div className="hero-section" id="features">
        <div className="hero-img">
          <img src={OnlineWorld} alt="hero" />
        </div>
        <div className="hero-title">
          Welcome To <span>Vote Sphere</span>
          <p className="phrase">
            Navigate Your Voice, Shape the Future with VoteSphere ...
          </p>
        </div>
      </div>
      <div className="mini-section">
        <p className="mini-phrase">
          VoteSphere empowers you to have your say on everything <br />
          from your favorite artists to the latest books and music.
          <br /> Explore endless choices and cast your vote to shape <br />
          the trends and spotlight what matters most to you
        </p>
        <div className="hero-img">
          <img src={OnlineVote} alt="hero" />
        </div>
      </div>
      <div className="mini-section">
        <div className="mobile-app">
          <img src={mobileApp} alt="hero" />
        </div>
        <div className="get-started">
          <p className="mini-phrase">
            Discover Insights and Trends: Explore real-time results <br />
            and in-depth analysis on your favorite artists, books, music,
            <br /> and more with VoteSphere. Gain valuable insights into popular
            trends
            <br /> and make informed decisions about where to cast your vote.
          </p>
          {/* <Link to="/dashboard"> */}

          <button onClick={navigateDashboard}>Get Started</button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
