import { Button } from '@material-ui/core';

import React, {useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css';



function OfferNavbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }

    };
    

    useEffect(() =>{
        showButton()
    }, []);
    function logout()  {
      window.localStorage.clear();
      localStorage.setItem("isLogged", false)
      console.log("Clicked")
      window.alert("Log Out successfull")
      //window.location.href="/"
    
    };

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                  <Link to="/offerpage" className="navbar-logo" onClick={closeMobileMenu}>
                    HomePage <i className="fab fa-typo3"/>

                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                  </div>
                  <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                    
                  </ul>
                  <Link to="/" className="navbar-logo" onClick={logout}>
                    Log Out <i className="fab fa-typo3"/>

                  </Link>
                </div>
            </nav>
        </>
    )
}
export default OfferNavbar