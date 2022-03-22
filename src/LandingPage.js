import './LandingPage.css';
import React, { useState, useEffect}from 'react';


const LandingPage = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 850);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 850);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <section className="landing-page-wrapper">
      <nav id="nav-bar">
        <div id="nav-right">
          {isDesktop ? (
            <>
              <a className="nav-item" href="about"><span className="highlight-primary">/</span>About</a>
              <a className="nav-item" href="about"><span className="highlight-primary">/</span>Experience</a>
              <a className="nav-item" href="about"><span className="highlight-primary">/</span>Work</a>
              <a className="nav-item" href="about"><span className="highlight-primary">/</span>Contact</a>
              <a className="button" id="resume-button" href="resume">Resume</a>
            </>
          ) : (
            <>
              <button id="hamburger-menu" onClick={handleToggle}><img alt="hamburger-menu" src="hamburger.png" width= "70px"></img></button>
              <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}></ul>
            </>
          )}
        </div>
      </nav>
      <div id="title-wrapper">
        <h1 className="title-heading">
          Hey, I'm <span className="highlight-primary">Kevin Mao</span>. <br/>
          <span className="title-heading-secondary">I code smart contracts.</span>
        </h1>
        <p className="title-intro">
          I'm a second year CS/Finance student @ UNSW dedicated to building in crypto since 2017.<br/>
          I'm also the president of <a href="http://uncb.xyz/" rel="noreferrer" target="_blank"><span  className="highlight-secondary">UNCB</span></a> and in my spare time, I play poker & figure skate.
        </p>
        <p className="title-intro" style={{"margin-bottom": "80px"}}>
          Currently, I'm a Software Engineer @ <a href="http://gmistudios.com.au/" rel="noreferrer" target="_blank"><span className="highlight-secondary">GMI Studios</span></a> building cool things...
        </p>
        <a className="button" href="https://www.kmao.blog/" target="_blank" rel="noreferrer">Check out my blog!</a>
      </div>

      {/* RENDER IF SCREENWIDTH IS ABOVE 768 PX (TABLET)*/}
      {isDesktop ? (
        <>
          <div className="socials-pane" orientation="left">
            <ul id="socials-list">
              <li><a href="https://github.com/kmaox" rel="noreferrer" target="_blank"><img alt="github" src="./github.svg"></img></a></li>
              <li><a href="https://twitter.com/kmao37" rel="noreferrer" target="_blank"><img alt="twitter" src="./twitter.svg"></img></a></li>
              <li><a href="https://www.linkedin.com/in/kmao/" rel="noreferrer" target="_blank"><img alt="linkedin" src="./linkedin.svg"></img></a></li>
            </ul>
          </div>
          <p id="learn-more">
            Learn More {'>>'}
          </p>
        </>
      ) : (
        <></>
      )}
      
    </section>
  );  
}

export default LandingPage;
