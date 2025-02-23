"use client";

import React, { useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import "./Home.css";
import Image from 'next/image';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Expert in HTML",
        "Expert in CSS",
        "Expert in TypeScript",
        "Expert in JavaScript",
        "Expert in React.Js",
        "Expert in Next.Js",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-main-page">
      <div className="heading-div">
        <div className="portfolio-div">Portfolio.</div>
        <div className="navbar-div">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            
            <li>
              <Link href="/">Service</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mid-div">
        <div className="main-div">
          <div className="hello-div">Hello It&apos;s Me</div>
          <div className="name-div">Jawad Hassan</div>
          <div className="skills-div">
            And I&apos;m <span className="auto-type"></span>
          </div>
          <div className="intro-div">
          I am an aspiring web developer with strong skills in HTML, CSS, and JavaScript. Currently, I'm expanding my knowledge by learning TypeScript and Next.js. My goal is to become a proficient full-stack developer, and I'm dedicated to continuous learning and improvement through new technologies and projects.
          </div>
          <div className="logo-section">
<a href= "https://www.linkedin.com/in/jawad-hassan-66b6812ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app cmd" target="_blank" rel="noopener noreferrer">
              <Image className="lnimg" src="/linkedin.png" alt="fb-logo" width={35} height={35}/> 
            </a>
            <a href="https://www.instagram.com/unfav_jawiii/profilecard/" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="insta-logo" width={40} height={40} />
            </a>
          </div>
        </div>
        <div className="img-div">
          <Image className="jawad-logo" src="/jawad2.png" alt="jawad's photo" width={800} height={800} />
        </div>
      </div>

      <a href="#" className="animated-button1" id="animated-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Download CV
      </a>
    </div>
  );
};

export default Home;
