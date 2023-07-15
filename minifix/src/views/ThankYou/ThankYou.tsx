import './ThankYou.css';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

function ThankYou(){
    const [name, setName]= useState('')

    useEffect(() => {
        const newMessageStorage = localStorage.getItem('newMessage');
        if (newMessageStorage !== null) {
          const newMessage = JSON.parse(newMessageStorage);
          setName(newMessage.name)
          console.log(newMessage.name);
        }
      }, []);
    return(
        <section className='thank-you__container'>
            <Header/>
            <h1 className='text__title text__title-thank-you'>Tack för ditt meddelande {name}! </h1>
            <p className='text__body'>Vi återkommer så fort vi kan</p>
        </section>
    )
}
export default ThankYou;