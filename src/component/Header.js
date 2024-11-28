import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCoins, FaWallet, FaGift, FaPiggyBank } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import Navbar from "./Navbar";
 
const Header = ({ name, memberSince, rewards, balance, offers, savings }) => {
 
  const [tier,setTier]=useState('Bronze');
  const navigate=useNavigate();
  const handleTierChange=(newTier)=>{
    setTier(newTier);
  }
  const handleOffersClick=()=>{
    navigate("/offerpage"); 
     
     
  }
  return (
    <>
    <Navbar/>
    <div className="header">
      <h1>Welcome {name}!</h1>
      <p className="membership-info">View Benefits for {tier} Members</p>
      <p className="membership-date">Member Since {memberSince}</p>
      <div className="stats">
        <div className="stat-item">
          <div className="box">
            <h2><FaCoins className="icon" />{rewards}</h2>
          </div>
          <p>Rewards Earned</p>
        </div>
        <div className="stat-item">
          <div className="box">
            <h2><FaWallet className="icon" />{balance}</h2>
          </div>
          <p>Balance</p>
        </div>
        <div className="stat-item">
          <div className="box">
          <h2><button className="button1" onClick={handleOffersClick}><FaGift className="icon" /><u>{ offers}</u></button></h2>            
          </div>
          <p>Available Offers</p>
        </div>
        <div className="stat-item">
          <div className="box">
            <h2><FaPiggyBank className="icon" />{savings}</h2>
          </div>
          <p>Total Savings</p>
        </div>
      </div>
      <div>
        <ProgressBar value={rewards} onTierChange={handleTierChange}/>
    </div>
    </div>
    </>
    
  );
};
 
export default Header;
 