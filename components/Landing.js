import React from 'react';
import './Style.css';


export default function Landing() {
  return (
    <>
    <div className='home'>
        <div className='l-home'>
      
       <p>An AI enabled engine to Source candidates more</p>
         <h3> effectively, find best match from diverse talent source.</h3>
         <div className='hm-btn'>
          <button id='btn-wd'>Watch Demo</button>
          <button id='btn-tfr'>Try For Free </button>
         </div>
        </div>
        <div className='r-home'></div>

    </div>
    <div className='navbar'>
      <img className="logo" src='./pic/spyglass-logo-zip-file/svg/logo-no-background.svg'></img>
        <ul>
            <li><span>Home</span></li>
            <li><span>Product</span></li>
            <li><span>About</span></li>
            <li><span>Contact Us</span></li>
            {/* <li><span>Resources</span></li> */}
            {/* <button>Login</button> */}
        </ul>
    </div>
    </>
  )
}
