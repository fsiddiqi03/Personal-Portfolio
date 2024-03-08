import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';
import './home.css'

const Home = () => {
  return (
    <div className='homeContainer'>
      {/* Typewriter Effect for the Introduction */}
      <div className='typewriterContainer'>
        <Typewriter
          options={{
            strings: [
              'Hello, my name is Faris Siddiqi.',
              'Welcome to my portfolio!' // Second message
            ],
            autoStart: true,
            loop: true,
            delay: 100, // Adjust typing speed (optional)
          }}
        />
      </div>
      
      {/* About Me Section */}
      <p>This is a little about me...</p>

      {/* Social Links */}
      <div className='socialIcons'>
        <SocialIcon target='_blank' url='https://www.linkedin.com/in/faris-siddiqi-04aa592a1/' className="socialIcon"/> 
        <SocialIcon target='_blank' url='https://github.com/fsiddiqi03' className="socialIcon"/> 
      </div>
    </div>
  );
};

export default Home;
