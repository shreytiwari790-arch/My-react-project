import React from "react";
import "../../styles/HomeStyle.css";
import pic1 from "../../Food_Assets/assets/hero/hero-1.jpg";
import pic2 from "../../Food_Assets/assets/hero/hero-2.png";

const Section1 = () => {
  return (
    <div>
      <div className="container" style={{ backgroundImage: `url(${pic1})` }}>
        <div
          className="outer"
          
        >
          <div className='m1'>
            <img src={pic2} alt="Burger" />
          </div>
          <div className='m2'>
            <div className='text'>
              <h1>NEW <br /> BURGER</h1>
            </div>
            <br />
            <h2>WITH ONION</h2>
            <p>
              Feugiat primis ligula risus auctor laoreet augue egestas mauris<br />
              viverra tortor in iaculis pretium at magna mauris ipsum primis
              rhoncus feugiat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
