import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './AboutUs.css';

function AboutUs(){

    return(
        <section className="about">
            <Header/>
            <h1 className="text__title">Om Minifix, vem är jag?</h1>
            <p className="text__body">Välkommen till Minifix! Jag syr handgjorda barn- och babyprodukter med omsorg och kärlek. Jag tror på att erbjuda högkvalitativa och praktiska plagg för barn. Jag började sy för att jag inte hittade tillräckligt med unisexkläder i vanliga butiker. Minifix grundades för att erbjuda tidlösa kläder och accessoarer som passar alla barn, oavsett kön. </p>
            <p className='text__body'>Jag syr varje plagg för hand med noggrannhet och använder material av högsta kvalitet. Jag vill att mina produkter ska vara skonsamma mot barnets hud och samtidigt hållbara för att kunna ärvas och användas länge. Jag är stolt över att vara en del av ditt barns resa genom barndomen och skapa kläder som kan vara en del av familjens minnen och arv.</p>
            <p className='text__body'>Jag är även passionerad över att skapa och sy kläder med olika mönster och färger för barn som inte hittar passande alternativ i vanliga butiker. Mitt mål är att erbjuda unisexalternativ som kan passa barn med olika fysiska uttryck, inklusive prematurt födda barn, smala men långa barn, korta barn och så vidare. Genom mitt arbete strävar jag efter att främja variation och inkludering, där barn kan uttrycka sin stil oavsett traditionella könsroller. Det är en betydelsefull uppgift för mig att säkerställa att varje barn känner sig bekvämt och självsäkert i sina kläder och samtidigt bryta normen för vad som förväntas av dem.</p>
        <Footer/>
        </section>

    )
}
export default AboutUs;