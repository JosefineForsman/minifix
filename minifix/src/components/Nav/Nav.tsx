import './Nav.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Nav(){
    const [showNav, setShowNav] = useState<boolean>(false);
    const navigate = useNavigate();

    function showNavicon(){
        setShowNav(!showNav)
    }
    function navigateToProducts(){
        navigate('/produkter')
    }
    function navigateToAboutUs(){
        navigate('/omoss')
    }
  
    function navigateToBuy(){
        navigate('/köpa')
    }
    return(
        <nav onClick={showNavicon}>{
            showNav ? 
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn">&times;</a>
                <a href="#" onClick={ navigateToBuy }>Hur köper jag produkter?</a>
                <a href="#" onClick={ navigateToAboutUs }>Om oss</a>
                <a href="#" onClick={ navigateToProducts }>Produkter</a>
            </div> : ''
            }
        <span className='nav-icon' onClick= {showNavicon}>&#9776; </span>
        </nav>
    )
}
export default Nav;