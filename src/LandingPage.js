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


  return (
    <section className="landing-page-wrapper">
      <nav id="nav-bar">
      </nav>
      <div id="title-wrapper">
        <h1 className="title-heading">
          Hey, I'm <span className="highlight-primary">Kevin Mao</span>. <br/>
          <span className="title-heading-secondary">I code smart contracts</span> <br/>
          <span className="title-heading-secondary">& sculpt ideas.</span>
        </h1>
        <p className="title-intro">
          I'm presently on program leave from my CS/Finance degree @ UNSW. I've been dedicated to building in crypto since 2017.<br/>
          Currently, I work on <a href="http://r3cursive.io/" rel="noreferrer" target="_blank"><span  className="highlight-secondary">R3cursive</span></a> as a founder-contributor & <a href="https://www.augmintedlabs.io/" rel="noreferrer" target="_blank"><span className="highlight-secondary">Augminted Labs</span></a> as a Product Manager.
        </p>
        <p className="title-intro" style={{"margin-bottom": "80px"}}>
          Previously, I was president of <a href="http://uncb.xyz/" rel="noreferrer" target="_blank"><span className="highlight-secondary">UNCB</span></a> & a Software Engineer @ <a href="http://gmistudios.com.au/" rel="noreferrer" target="_blank"><span className="highlight-secondary">GMI Studios</span></a>. In my spare time, I train Muay Thai & card count. 
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
        </>
      ) : (
        <></>
      )}
      
    </section>
  );  
}

export default LandingPage;
