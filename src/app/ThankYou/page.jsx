// "use client";

// import "../../Styles/Thankyou.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";

// export default function ThankYou() {
//   return (
//     <>
//       <div className="main1_ThankYou">
//         <div className="container1_ThankYou">
//           <div className="thankyou-card">
            
//             <FontAwesomeIcon icon={faCircleCheck} className="success-icon" />

//             <h2>Thank You!</h2>
//             <p>Your request has been submitted successfully.</p>

//             <button className="thankyou-btn" >
//              <Link href="/Per">Go to Dashboard </Link> 
//             </button>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



"use client";

import "../../Styles/Thankyou.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

export default function ThankYou() {

    const containerRef = useRef(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {translateY:-20 ,  duration: 1 , repeat:-1 ,     yoyo: true, });
  }, { scope: containerRef }); 

  return (

    <>
      <div className="main1_ThankYou">
        <div className="container1_ThankYou">
          <div className="thankyou-card"  ref={containerRef}>
            
            <FontAwesomeIcon icon={faCircleCheck} className="success-icon" ref={boxRef}  />

            <h2>Thank You!</h2>
            <p>Your request has been submitted successfully.</p>

            <button className="thankyou-btn" >
             <Link href="/Per">Go to Dashboard </Link> 
            </button>

          </div>
        </div>
      </div>
    </>
  );
}