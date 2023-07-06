import './Nav.css'
import { useState } from 'react';

function Nav(){
    const [showNav, setShowNav] = useState<boolean>(false);

    function showNavicon(){
        setShowNav(!showNav)
    }

    return(
        <nav onClick= { () => {setShowNav(!showNav)}}>{
            showNav ? 
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={showNavicon}>&times;</a>
                <a href="#">Om oss</a>
                <a href="#">Kontakta oss</a>
                <a href="#">Produkter</a>
            </div> : ''
            }
        <span className='nav-icon'>&#9776; </span>
        </nav>
    )
}
export default Nav;