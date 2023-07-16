import Header from '../../components/Header/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Contact.css';

function Contact(){
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  interface Message{
    name: string,
    number: number,
    email: string,
    message: string
  }

  function getMessage() {
    const currentMessage: Message = {
      name: name,
      number: number,
      email: email,
      message: message
    };

    // Hämta befintiga meddelanden från local storage
    const existingMessages = localStorage.getItem('messages');
    const messages = existingMessages ? JSON.parse(existingMessages) : [];

    // Lägg till det nya meddelandet i arrayen
    messages.push(currentMessage);

    // Spara den uppdaterade arrayen i local storage
    localStorage.setItem('messages', JSON.stringify(messages));

    navigate('/tack');
  }
  
    return(
    <div className="hero">
        <section className='form-container'>
            <Header/>
        </section>
          <form name="company-form" >
            <h1 className='text__title'>Kontakta oss :</h1>
            <h2 className='text__form'>Skulle det vara så att du har några som helst frågor så är det bara att skicka iväg ett meddelande här!</h2>
            <br/>
          <div className="hero__container">
            <input className='input' type="text" onChange={(e)=> setName(e.target.value)} required/>
            <label htmlFor="fname" className='text__body'> Namn: </label>
          </div>
          <div className="hero__container">
            <input className='input'type="number" onChange={(e)=> setNumber(parseInt(e.target.value))} required/>
            <label htmlFor="number" className='text__body'> Telefon nummer: </label>
          </div>
          <div className="hero__container">
            <input className='input' type="email" onChange={(e)=> setEmail(e.target.value)}  required/>
            <label htmlFor="email" className='text__body'> Email adress:</label>
          </div>
          <div className="hero__container">
            <p className='text__body'> Ditt meddelande : </p>
            <textarea id="message" onChange={(e)=> setMessage(e.target.value)} ></textarea>
            <label htmlFor="message"></label>
          </div>
          <button type='button' className='button__primary button__primary-sumbit' onClick={getMessage}>Skicka </button>     
          </form>
          </div>
    )
}
export default Contact;