import React, { useState } from 'react';
import landngBanner from '../store/landing_page_photo.png';

const LandingPage = ({funShowSecond}) => {
    const [shouldShowSecondPage,setShouldShowSecondPage]=useState(false);

    const handleKeyPress=(e)=>{
        e.preventDefault();
        setShouldShowSecondPage(true);
        funShowSecond()
    }
  return (
    <div className="landing_page">
      {shouldShowSecondPage ? null : (
        <div className="landing_component">
          <div className="left_page">
            <img src={landngBanner} alt="" />
          </div>
          <div className="right_page">
            <h1>10x Team 04</h1>
            <button type='submit' onClick={handleKeyPress}>Enter</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage