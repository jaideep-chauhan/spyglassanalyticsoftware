import React from 'react';
import './Style.css';




// function useScrollTop() {
//   const [scrollTop, setScrollTop] = useState(0);
//   const onScroll = (event) => setScrollTop(event.target.scrollTop);
//   return [scrollTop, { onScroll }];
// }


    
    //     {...scrollProps}
    //     style={{
    //       boxShadow:
    //         scrollTop > 0 ? "inset 0 8px 5px -5px rgb(0 0 0 / 0.4)" : "none",
    //       transition: "box-shadow 0.3s",
    //       height: 100,
    //       width: 200,
    //       overflow: "auto",
    //       border: "1px solid #ccc",
    //       padding: 20
    //     }}
    //   >













export default function Recurtment() {
//   const [scrollTop, scrollProps] = useScrollTop();

  return (

    <>
    <div className='recurtment'>
    <h1>Next Generation Recruitment</h1>
     <h3>An AI enabled engine to Source candidates more

effectively, find best match from diverse talent source.</h3>
     <div className='main-recurtment'>
        <div className='img-recute'>
        <img src='https://images.unsplash.com/photo-1633876841461-772d2b0b0e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGZpbHRlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'></img>
         
        </div>
        <div className='process-recute' addEvent    >
            <h2 className='planing'>Planning</h2>
            <div className='step-recurte planing'>
            <iconify-icon className="iconify-icon" icon="fe:list-task"></iconify-icon>
            <div className='process-data'>
                <p>A dedicated Account Manager understands the job requirement, company profile and nature of work from the Client.</p>
            </div>
            </div>
            <div className='step-recurte planing'>
            <iconify-icon className="iconify-icon" icon="fe:list-task"></iconify-icon>
            <div className='process-data'>
           <p> Our Technical & Recruitment Team sit together to understand the requirement in more detail and finalize the strategy of resume.</p>
            </div>
            </div>
            <h2 className='sourcing'>Sourcing</h2>
            <div className='step-recurte sourcing'>
            <iconify-icon className="iconify-icon" icon="fe:list-task"></iconify-icon>
            <div className='process-data'>
                <p>
The Recruitment Team uses an internal <b> AI enabled </b>engine which source candidates from diverse sources.</p>
            </div>
            </div>
            <div className='step-recurte sourcing'>
            <iconify-icon className="iconify-icon" icon="fe:list-task"></iconify-icon>
            <div className='process-data'>
                <p>First level of sourcing is done on the basis of decided strategy

</p>
            </div>
            </div>
            <h2 className='filtering'>Filtering</h2>
            <div className='step-recurte filtering'>
            <iconify-icon className="iconify-icon" icon="fe:list-task"></iconify-icon>
            <div className='process-data'>
                <p>Our Technical Team do second level of screening on the basis of client requirement</p>
            </div>
            </div>
            <h2 className='outcome'>Outcome</h2>
            <div className='step-recurte outcome'>
            <iconify-icon className="iconify-icon" icon="fe:list-task"></iconify-icon>
            <div className='process-data'>
                <p>Share screened resume pipeline with the client and get the feedback</p>
            </div>
            </div>
            <h2 className='feedback'>Feedback Matters</h2>
            <div className='step-recurte feedback'>
            <iconify-icon className="iconify-icon" icon="fe:list-task"></iconify-icon>
            <div className='process-data'>
                <p>Analyze and incorporate the feedback received from the client in the recruitment process.</p>
            </div>
            </div>
        </div>
     </div>
     </div>
    </>

  ) 
}