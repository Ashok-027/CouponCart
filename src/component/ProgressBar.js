import React, { useState, useEffect } from 'react';
import './style.css';

function ProgressBar({ value ,onTierChange}) {
  const [progress, setProgress] = useState(0);
  const [tier, setTier] = useState('Bronze'); // Default tier
  const [remainingPoints,setRemainingPoints]=useState(0);
  const bronzevalue=250;
  const goldvalue=500;
  const platinumvalue=1000;
  const [star,setStar]=useState('');

  useEffect(() => {
    if (value>0 && value < 250 ) {
      setProgress(0.25);
      setTier('Bronze');
      const requiredPoints=bronzevalue-value;
      setRemainingPoints(requiredPoints);
      setStar('Gold');

    }else if (value >= 250 && value<500) {
      setProgress(0.5);
      setTier('Gold');
      const requiredPoints=goldvalue-value;
      setRemainingPoints(requiredPoints);
      setStar('Platinum');

    }else if (value >= 500 && value<1000) {
      setProgress(0.75);
      setTier('Platinum');
      const requiredPoints=platinumvalue-value;
      setRemainingPoints(requiredPoints);
      setStar('Diamond');
    } else {
      setProgress(1);
      setTier('Diamond');

    } 
    onTierChange(tier);
  }, [value, tier]);
 
  console.log("Star: ",star);
  console.log("Value: ",remainingPoints)
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div align="center" className="progress-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="progress-labels">
        <span className="label">Bronze</span>
        <span className="label">Gold</span>
        <span className="label">Platinum</span>
        <span className="label">Diamond</span>
      </div>
      <div>
        {remainingPoints > 0 &&  tier!=='Diamond' && (
            <p className='needpints'>You need <b className='points'>{remainingPoints}</b> more points to become {star}....</p>

          
        )}
      </div>
    </div>
  );
}
 
export default ProgressBar;
 