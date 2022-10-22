import React from 'react';
import './Style.css';

export default function RegardingTeam() {
  return (
    <>
   <div className='regard-team'>

    <div className='regardingteam'>
        <div className="stylingCircle"></div>
        <h2>Regarding Team</h2>
       <ul>
        <li>Female who has vast recruitment experience and have taken break and now starting their 2nd inning in the career</li>
        <li>Experince in recruitment across various levels in Tech/Non tech domain</li>
        <li>Expert in hiring through social media, job portals</li>
        <li>Good exposure to handle end to end recruitment cycle</li>
        <li>Our team has good experience in delivering Startup and MNC environment</li>
       </ul>
    </div>
    <div className='technicalteam'>
        <div className="stylingCircle"></div>
        <h2>Technical Team</h2>

     <ul>
      <li>Consist of Industry Experts like Product Managers,Software Architects,Sales/Marketing Managers</li>
      <li>Has good hands-on experience on latest technologies</li>
      <li>Has exposure to both startup and MNC environment and handled various small to large scale projects</li>
      
     </ul>

    </div>

   </div>
    </>

  ) 
}