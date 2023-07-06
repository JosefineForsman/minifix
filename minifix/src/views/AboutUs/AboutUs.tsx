import Header from '../../components/Header/Header';
import './AboutUs.css';

function AboutUs(){

    return(
        <section className="about">
            <Header/>
            <h1 className="text__title">Om oss, vilka är vi?</h1>
            <p className="text__body">Välkommen till Minifix, där vi skapar handgjorda barn- och babyprodukter med omsorg och kärlek. Vi tror på att erbjuda produkter av högsta kvalitet som är både vackra och praktiska för ditt barns vardag.</p>
            <p className="text__body">Vårt företag grundades med en passion för att erbjuda barnkläder och accessoarer som är tidlösa och kan bäras av alla barn oavsett kön. Vi strävar efter att bryta stereotyper och främja ett unisex perspektiv på barnkläder, vilket gör att våra produkter blir användbara och kan ärvas vidare till syskon och längre.</p>
            <p className="text__body">Varje plagg sys för hand med stor omsorg och uppmärksamhet på detaljer. Vi använder noggrant utvalda material av högsta kvalitet för att säkerställa att våra produkter är skonsamma mot ditt barns känsliga hud och samtidigt hållbara för långvarig användning.</p>
            <p className="text__body">Vi är stolta över att vara en del av ditt barns resa genom barndomen och att skapa plagg som kan följa dem under lång tid. Hos Minifix är vi dedikerade till att erbjuda hållbara och tidlösa barn- och babyprodukter som står emot trender och kan vara en del av familjens minnen och arv.</p>
        </section>

    )
}
export default AboutUs;