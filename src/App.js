import React, { useState } from "react";
import { BrowserRouter as Router,Route, Routes  } from "react-router-dom";
import Header from "./component/Header";
import RewardsTable from "./component/RewardsTable";
import OffersPage from "./component/OffersPage";
import Description from "./component/Description";
import CusLogin from "./component/CusLogin";

 
function App () {
  const [user,setUser] =useState( {
    name: "Ashok Kumar",
    memberSince: "October 2024",
    offers: 10,
    savings: 490,
   // currentTier: 70, // Assume percentage for platinum level
  });
    const [purchases,setPurchases]=useState([
      { name: "Redeemed on MNO", rewards: -460 },
      { name: "Purchase of ABC", rewards: +800 },
      { name: "Purchase of XYZ", rewards: +60 },
      { name: "Return of PQR", rewards: -30 },
      { name: "Purchase of PQR", rewards: +30 },
    ]);
 const balance=purchases.reduce((sum,reward)=>sum+reward.rewards,0);
 const totalRewards=purchases
      .filter(reward=> reward.rewards>0)
      .reduce((sum,reward)=>sum+reward.rewards,0);
  
  const [trigger,setTrigger]=useState(false);

  const handleOfferPage=()=>{
    setTrigger(true);
  }
  return (
    
    <div className="app">
      <Router>
        <Routes>
        <Route path="/homepage" element={<><Header 
        name={user.name}
        memberSince={user.memberSince}
        rewards={totalRewards}
        balance={balance}
        offers={user.offers}
        savings={user.savings} /><RewardsTable purchases={purchases} /></>}></Route>
        <Route path="/" element={<CusLogin/>} />
        <Route path="/offerpage" element={<OffersPage/>}/>
        <Route path="/description" element={<Description/>}/>
        </Routes>
      </Router>
      
    </div>
  );
};
 
export default App;
 