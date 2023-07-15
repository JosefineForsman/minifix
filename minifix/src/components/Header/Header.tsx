import './Header.css';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router';

function Header(){
    const navigate = useNavigate()

    function goToLanding(){
        navigate('/')
    }

    return(
        <header>
            <article className='header'>
                <h1 className='text__title' onClick={ goToLanding }>
                    Minfix
                </h1>
                <Nav/>
            </article>
        </header>
    )
}
export default Header;