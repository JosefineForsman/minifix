import './Buy.css';
import Header from '../../components/Header/Header';

function Buy(){

    return(
        <section className='buy'>
            <Header/>
            <article className='buy__container'>
                <h1 className='text__title text__title-buy'>Hur köper jag produkterna?</h1>
                <p className='buy__body-text'>Eftersom att jag syr på en hobby nivå just nu så kommer betalning av varor inte se ut som det gör på en vanlig webshop.</p>
                <h3 className='buy__text'>Steg 1:</h3>
                <p className='buy__body-text'>Tryck på 'Köp' knappen på önskad produkt.</p>
                <h3 className='buy__text'>Steg 2:</h3>
                <p className='buy__body-text'>Fyll i formuläret.</p>
                <h3 className='buy__text'>Steg 3:</h3>
                <p className='buy__body-text'>Jag kommer kontaka dig via mail, och så kommer betalningen ske via Swish. (Precis som när ni köpt via instagram)</p>
                <h3 className='buy__text'>Klart!!</h3>
            </article>
        </section>
    )
}
export default Buy;