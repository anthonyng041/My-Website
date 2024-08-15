import React from 'react';
import Socials from './Socials';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Anthony Nguyen
        </h1>
        <h3 className="home__subtitle"> Master's Student in IT Engineering</h3>
        <br />
        <p className="home__description">I have recently graduated from Concordia University with a bachelor's degree in Computer Science and I am dedicated to self-improvement. I am currently pursuing a master's degree in IT Engineering at ÉTS.</p>
        <br />
        <Socials />
    </div>
  )
}

export default Data