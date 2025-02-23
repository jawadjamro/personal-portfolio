"use client";

import "./About.css";
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-section">
      <div className="free-div"></div>
      <div className="about-content">
        <div className="about-image">
          <Image
            className="jawad-about-logo"
            src="/jawad1.png"
            alt="jawad's photo"
            width={1000} height={1000}
          />
        </div>
        <div className="about-text">
          <h2 className="about-h2">
            ABOUT <span className="about-span">ME</span>
          </h2>
          <p>
            I have hands-on experience with web development tools such as HTML, CSS, JavaScript, TypeScript, and Next.js. My goal is to build innovative projects and solve real-world problems through software development.
          </p>
        </div>
      </div>
      <div id="container" className="about-button">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default About;
