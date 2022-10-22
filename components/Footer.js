import React from 'react';
import './Style.css';

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='foot-1'>
            {/* <h1>Spyglass</h1>
            <p>Unite 500 Terry Francois Street,</p>
            <p>San Francisco, CA 94158</p> */}
      <img className="logo" src='./pic/spyglass-logo-zip-file/svg/logo-no-background.svg'></img>
            
            </div> 
        <div className='foot-2'>
        <h1>About Us</h1>
        <p>In year 2017, group of Engineers with vast and diversified experience came together to
           solve real life business problems with the help of technology. Our team has good exposure
            in delivering in startup and MNC environment</p>
            </div> 
        <div className='foot-3'>
        <h1>Contact Us</h1>
        <p> sales@spyglassanalyticssoftware.com</p>
        <p>  (+91) 9625784325</p>
        <p> Ground Floor, Tower B, Building 5, DLF Cyber City,</p>
        <p>Phase 3, Gurugram 122002</p>
            </div> 
    </div>
   
    </>

  ) 
}