import Header from '../../components/Header/Header';
import sweaters from '../../../assets/sweaters.jpg';
import yellow from '../../../assets/yellow.jpg';
import './Landing.css';
// import NewProductItem from '../../components/NewProductItem';
import { useNavigate } from 'react-router';
import newProducts from '../../newProducts.json'


function Landing(){
    const navigate = useNavigate();

    function navigateToProducts(){
        navigate('/produkter')
    }
   
    return(
        <section className='landing'>
            <header className='landing__top'>Frakt enligt postnords paket priser</header>
            <article className='landing__text'>
                <Header/>
                <aside>
                    <h1 className='text__title text__title-landing'>Välkommen till min värld av handgjorda skapelser!</h1>
                    <p className='text__body' >Här på min hemsida delar jag med mig av de unika produkter jag skapat med kärlek och omsorg. Allt du ser här är resultatet av min passion för hantverk och kreativitet.</p>
                    <p>Det är min glädje att kunna erbjuda dig ett varierat utbud av produkter. Allt från vackra accessoarer till praktiska och personliga gåvor – här finns något för alla tillfällen och smaker.</p>
                    <p>Tack för att du valde att upptäcka mitt hantverk. Jag hoppas att mina produkter kan sprida glädje och färg till ditt liv. Så välkommen in, kika runt och låt dig inspireras!
                    Tack för ditt stöd och välkommen till min handgjorda värld! / Minifix </p>
                </aside>
                    <h3 className='text__sub-title'>Produkter</h3>
                <article className='landing__container'>
               {/* <NewProductItem newItem={ newProducts }/> */}
                </article>
        <button className='button__primary' onClick={navigateToProducts}>Se alla produkter</button>
            </article>
        </section>
    )
}

export default Landing;