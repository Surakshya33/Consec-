import './Home.css';
import Click from './Click';
import React, { Component }  from 'react';

function Home() {
  
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ConSec: A New Pathway To Privacy</title>
        <link rel="stylesheet" href="style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" />
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <section className="headermain">
          <nav>
          
            <a href="#"><img src="/images/Logo.png" alt=""/></a>
            <link rel="stylesheet" href="style.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <Click/>

          
          </nav>
          <div className="text-box">
            
            <h2>ConSec</h2>
            <p>Giving you the space you need in the modern world.</p>
            <a href="#coventionalsection" className="Explore-Button">Explore</a>
          </div>
          <div className="floating">
            <img src="Images/First.png" alt="" />
            <img src="Images/Second.png" alt=""/>
            <img src="Images/Third.png" alt=""/>
            <img src="Images/Fourth.png" alt=""/>
            <img src="Images/First.png" alt=""/>
            <img src="Images/Second.png" alt=""/>
            <img src="Images/Third.png" alt=""/>
            <img src="Images/Fourth.png" alt=""/>
            
          </div>
        </section>
        {/* Questions */}
        <section className="coventional">
          <h1 id="coventionalsection">Conventional Social Media</h1>
          <p>Questions you should ask yourself before joining a social media</p>
          <div className="second">
            <div className="colum">
              <h3>Privacy</h3>
              <p>The lack of privacy is surreal in social media platform. 
                The major concern is <br />"Who is storing your data and how much do they have access to it?"</p>
            </div>
            <div className="colum">
              <h3>Analytics</h3>
              <p>Sometimes we do see Advertisements in social media but is that worth it? <br />
                "Isn't it proving that social media is selling and have access to every data we have?"
              </p>
            </div>
            <div className="colum">
              <h3>Reward</h3>
              <p>Small or big, every entity deserves a place in social media to earn and
                get better of themselves also promote content they love. <br />"Are you earning money using social media through your content?"
              </p>
            </div>
          </div>
        </section>
        {/* Decentralized platform */}
        <section className="decentralized">
          <h1>A Decentralized Platform</h1>
          <p>As these many questions rise about data privacy and security. 
            <br />Shouldn't one consider before using a <b>Social Media</b> platform?</p>
          <div className="dectralizedrow">
            <div className="decentralizedcol">
              <img src="Images/Privacy.png" alt="" />
              <div className="Layer">
                <h3>Privacy and Security</h3>
                <p>The privacy will rise at it's peak in <b>ConSec</b> since we don't store any data. 
                  It's in the blockchain with your full control.</p>
              </div>
            </div>
            <div className="decentralizedcol">
              <img src="Images/Analytics.png" alt="" />
              <div className="Layer">
                <h3>Analytics</h3>
                <p>We don't store any data that would round up into your Analytics making your profile free from
                  uncessary <b>Advertisements</b>.
                </p>
              </div>
            </div>
            <div className="decentralizedcol">
              <img src="Images/Rewards.png" alt="" />
              <div className="Layer">
                <h3>Rewards</h3>
                <p>With our Dai Coin one can earn and get themselves <b>valued </b>in our social media with their eye pleasing content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <h1>About Us</h1>
          <p>We are a group of cyber security enthusiasts who believe that our traditional social media platforms lack privacy and security.<br />
            We want our clients to use social media how they truly feel about it, rather than what they are provided.<br />
            ConSec encompasses all of one's thoughts on social media and its relevance in everyday life.</p>
          <p>Control And Security<img src="icon-lock.png" className="lock" /> </p>
          <p> Consec, Inc.</p>
        </section>
       
      </div>
    );
  };


export default Home;
