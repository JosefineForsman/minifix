import './Header.css';
import nav from '../../../assets/icon.png'

function Header(){

    return(
        <header>
            <article className='header'>
                <h1 className='text__title'>
                    Minfix
                </h1>
                <img src={nav} alt="nav-icon" className='header__nav' />
            </article>
        </header>
    )
}
export default Header;