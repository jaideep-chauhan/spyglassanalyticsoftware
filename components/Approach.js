import React from 'react';
import './Style.css';



export default function Approach() {




  return (
    <>
      <div className='approach'>
        <h1>Recruitment Process </h1>
        <div className="approach-main">

          <div className='approach-r aproach-box approach-nc'>
            <div className='aproach-box-upper'>
              <img src="https://plus.unsplash.com/premium_photo-1664475441653-0891887644a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbmFnZXIlMjBhZ2VudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
            </div>
            <h1 className='levelHeading'>L1.1</h1>
            <div className='text-box'>
              <h2>Account Manager Requirment</h2>
              <p>A dedicated Account Manager understands the job requirement, company profile and nature of work from the Client.</p>
              <h2> Technical & Recruitment</h2>
              <p>Our Technical & Recruitment Team sit together to understand the requirement in more detail and finalize the strategy of resume sourcing.</p></div>
          </div>

          <div className='approach-l aproach-box approach-center'>
            <h1 className='levelHeading levelHeading-rr'>L1.2</h1>
            <svg className='stroke' width="222" height="191" viewBox="0 0 222 191" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 190.5V2.5H222" stroke="#0D63F5" stroke-width="4" />
            </svg>
            <svg className='stroke stroke-bottom' width="222" height="191" viewBox="0 0 222 191" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 190.5V2.5H222" stroke="#0D63F5" stroke-width="4" />
            </svg>
            <div className='text-box text-box-rr'>
              <div className='aproach-box-upper box-upper-rr'>
                <img src='https://images.unsplash.com/photo-1633876841461-772d2b0b0e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGZpbHRlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'></img>
              </div>
              <h2>Engine we use</h2>
              <p>The Recruitment Team uses an internal enabled engine which source candidates from diverse sources.
              </p>
              <h2>First level done</h2>
              <p>First level of sourcing is done on the basis of decided strategy</p>
            </div>
          </div>

          <div className='approach-r aproach-box approach-nc'>
            <h1 className='levelHeading'>L2.0</h1>

            <div className='aproach-box-upper'>
              <img src='https://images.unsplash.com/photo-1618758992779-47151c11b39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'></img>
            </div>
            <div className='text-box'>
              <h2>Final Round</h2>
              <p>Our Technical Team do second level of screening on the basis of client requirement
              </p>
              <p>Share screened resume pipeline with the client and get the feedback
              </p>
              <p>Analyze and incorporate the feedback received from the client in the recruitment process.</p></div>
          </div>
        </div>

      </div>

    </>

  )
}