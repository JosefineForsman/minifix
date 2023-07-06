import Nav from '../../components/Nav/Nav';
import './Landing.css';
import { useNavigate } from 'react-router';

function Landing(){
    const navigate = useNavigate();

    function navigateToProducts(){
        navigate('/produkter')
    }

    return(
        <section className='landing'>
            <article className='landing__text'>
                <h1 className='text__title'>Minfix</h1>
                <h3 className='text__sub-title'>Välkommen hit!</h3>
                <p className='text__body'>Letar du efter unika barnkläder som funkar lika bra till både tjej och kille? Då har du kommit rätt!</p>
            </article>
        <button className='button__primary' onClick={navigateToProducts}>Se alla produkter</button>
        </section>
    )
}

export default Landing;