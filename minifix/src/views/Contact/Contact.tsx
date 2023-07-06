import Header from '../../components/Header/Header';
import './Contact.css';

function Contact(){

    return(

    <div className="hero">
        <section className='form-container'>
            <Header/>
        </section>
          <form name="company-form" action="form_cont.html" method="post" >
            <h1 className='text__title'>Kontakta oss :</h1>
            <h2 className='text__form'>Skulle det vara så att du har några som helst frågor så är det bara att skicka iväg ett meddelande här!</h2>
            <br/>
          <div className="form1">
            <input className='input' type="text" required/>
            <label htmlFor="fname" className='text__body'> Namn: </label>
          </div>
          <div className="form1">
            <input className='input'type="number" required/>
            <label htmlFor="number" className='text__body'> Telefon nummer: </label>
          </div>
          <div className="form1">
            <input className='input' type="email" required/>
            <label htmlFor="email" className='text__body'> Email adress:</label>
          </div>
          <div className="form1">
            <p className='text__body'> Ditt meddelande : </p>
            <textarea id="message"></textarea>
            <label htmlFor="message"></label>
          </div>
          <button type="submit" className='button__primary button__primary-sumbit'>Skicka </button>     
          </form>
          </div>
    )
}
export default Contact;