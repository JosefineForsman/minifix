import './Header.css';
import Nav from '../Nav/Nav';

function Header(){

    return(
        <header>
            <article className='header'>
                <h1 className='text__title'>
                    Minfix
                </h1>
                <Nav/>
            </article>
        </header>
    )
}
export default Header;