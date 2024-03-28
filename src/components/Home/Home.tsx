import React from "react";
import { SocialIcon } from "react-social-icons";
import Typewriter from "typewriter-effect";
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      {/* Typewriter Effect for the Introduction */}
      <div className="typewriterContainer">
        <Typewriter
          options={{
            strings: [
              "Hello, my name is Faris Siddiqi.",
              "Welcome to my portfolio!",
              "Little about me....", // Second message
            ],
            autoStart: true,
            loop: true,
            delay: 65, // Adjust typing speed (optional)
          }}
        />
      </div>

      {/* About Me Section */}
      <p className="about-me">
        I'm a rising Junior studying Computer Science at Loyola University
        Chicago, where I discovered my passion for coding and backend
        development in March 2023. Transitioning into CS has been a game-changer
        for me, opening up a world where I can solve complex problems and
        innovate behind the scenes. I especially enjoy working with AWS,
        leveraging its power to build scalable and efficient cloud-based
        solutions. My journey is just beginning, but I'm eager to explore the
        depths of coding and cloud technologies further.
      </p>

      {/* Social Links */}
      <div className="socialIcons">
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/faris-siddiqi-04aa592a1/"
          className="socialIcon"
        />
        <SocialIcon
          target="_blank"
          url="https://github.com/fsiddiqi03"
          className="socialIcon"
        />
      </div>
    </div>
  );
};

export default Home;
