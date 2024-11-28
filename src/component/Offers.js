import React from 'react';
import { useRef, useState, useEffect } from 'react';

 
function Offers({ offerNumber, oneLinerDescription, couponCode }) {
  
    const [isCopied, setIsCopied] = useState(false);
    const couponCodeRef = useRef(null);
   
    useEffect(() => {
        if(couponCodeRef.current){
            couponCodeRef.current.textContent = couponCode;
        }
    }, [couponCode]);
   
    const handleCopy = () => {
      navigator.clipboard.writeText(couponCode);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset the copied state after 2 seconds
    };
    

    return (
      
    <div className="offer-container">
      <div className="offer-number">
            <h3>Offer {offerNumber}</h3>
            <p><a className='h11' href='/description' target="_parent">{oneLinerDescription} </a></p>
      </div>
      <div className="coupon-actions">
        <button className="copy-coupon-btn" onClick={handleCopy}>
            Copy Coupon Code
        </button>
        {isCopied && <div className='copied-message'>Coupon Code Copied!</div>}
        <button className="redeem-coupon-btn"><a className='redeem' href='https://www.booking.com' target="_blank">
            Redeem Coupon</a>
        </button>      
      </div> 
    </div>
  );
}
 
export default Offers;
 