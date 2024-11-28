import React from 'react';
import Navbar from './Navbar';
import Offers from './Offers';
 
function OffersPage() {
  const offersData = [
    {
      offerNumber: 1,
      oneLinerDescription: 'Mobile Coupon',
      couponCode: 'COUPON_CODE_1'
    },
    {
        offerNumber: 2,
        oneLinerDescription: 'Gift Cards',
        couponCode: 'COUPON_CODE_2'
      },{
        offerNumber: 3,
        oneLinerDescription: 'Welcome Bonus',
        couponCode: 'COUPON_CODE_3'
      },{
        offerNumber: 4,
        oneLinerDescription: 'Birthday Offers',
        couponCode: 'COUPON_CODE_4'
      },
      {
        offerNumber: 5,
        oneLinerDescription: 'Pack Code Offers',
        couponCode: 'COUPON_CODE_5'
      },
      {
          offerNumber: 6,
          oneLinerDescription: 'Upto 10% Discount',
          couponCode: 'COUPON_CODE_6'
        },{
          offerNumber: 7,
          oneLinerDescription: 'Streaks Offers',
          couponCode: 'COUPON_CODE_7'
        },{
          offerNumber: 8,
          oneLinerDescription: 'Instant Win Offers',
          couponCode: 'COUPON_CODE_8'
        },

        {
          offerNumber: 9,
          oneLinerDescription: 'Credit Card 10% discount',
          couponCode: 'COUPON_CODE_9'
        },{
          offerNumber: 10,
          oneLinerDescription: 'Debit Card 10% discount',
          couponCode: 'COUPON_CODE_10'
        },
    // ... (Add more offers here)
  ];
 
  return (
    <>
    <Navbar/>
    <div className="offers-page">

      <h1>Available Offers and Coupons Designed for You</h1>
      <div className="offers-container">
        {offersData.map((offer, index) => (
          <Offers
            key={index}
            offerNumber={offer.offerNumber}
            oneLinerDescription={offer.oneLinerDescription}
            couponCode={offer.couponCode}
          />
        ))}
      </div>
      
      <p className='h11'>These offers are curated for the User based on past purchases, interests, browsing patterns, etc.</p>

    </div>

    </>
  );
}
 
export default OffersPage;
 