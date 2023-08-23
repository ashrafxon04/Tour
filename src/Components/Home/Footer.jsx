import React from 'react'


function Footer() {
  return (
    <div className='footer'>
      <div className="karusek">
        <div className='box'><strong>Prev</strong></div>
        <div className='box'><h2 className='textColor'>01</h2></div>
        <div className='box'><h2 className='textColor'>02</h2></div>
        <div className='box'><h2 className='textColor'>03</h2></div>
        <div className='box'><h2 className='textColor'>04</h2></div>
        <div className='box'><strong>Next</strong></div>
      </div>
      <div className="wrapperfot">
      <div className="footerPart">
        <h1 className='textfooter'>Sign Up For Our Newsletter</h1>
        <div className="wrap">
            <input className='inputfooter' type="text"placeholder='   Enter your e-mail here' />
            <button className='btnfooter'>Subscribe Now</button>
        </div>
      </div>
      </div>
      <div className='con_footer'>
        <div className='foterbox1'>
            <h1>Explore</h1>
            <p className='txtfoot'> Continually productize compelling dome packed with all Elated utilize website and creating  supply next-generation</p>     
            <h2>Follow Us On:</h2>
            <div className='iconsfooter'>
                <div className='iconns'></div>
                <div className='iconns'></div>
                <div className='iconns'></div>
                <div className='iconns'></div>
                <div className='iconns'></div>
            </div>
        </div>
        <div className='foterbox'>
            <h1>Tour Type</h1>
            <p>Advanture Tour</p>
            <p>Group Tour</p>
            <p>Seasonal Tour</p>
            <p>Relaxation Tour</p>
            <p>Family Friendly Tour</p>
        </div>
        <div className='foterbox'>
            <h1>Contact Info</h1>
            <p>88130-589-745-6987</p>
            <p>+1655-456-523</p>
            <p>Mon-Fir 09:00-18:00</p>
            <p>except public holidays</p>
            <p>25/2 Vocta street building</p>
            <p>Melborn City</p>
        </div>
        <div className='foterbox4'>
            <h1>Gallery</h1>
            <div className="contineeer">
                <div className='gallery'></div>
                <div className='gallery'></div>
                <div className='gallery'></div>
                <div className='gallery'></div>
                <div className='gallery'></div>
                <div className='gallery'></div>
            </div>
        </div>
      </div>
      <div className="lastDiv">
        <p>
© Copyright 2022. All Rights Reserved by LabArtisan</p>
      </div>
    </div>
  )
}

export default Footer
