import React from 'react';
import './Contact.css';

export function Contact() {
  return (
    <div className="container">
      <h1>Kontakt</h1>
      <form>
        <label for="fname">Imię</label>
        <input type="text" id="fname" name="firstname" placeholder="Imię..." required/>

        <label for="lname">Nazwisko</label>
        <input type="text" id="lname" name="lastname" placeholder="Nazwisko..." required/>

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder='E-mail...' required/>

        <label for="phonenumber">Numer telefonu</label>
        <input type="tel" id="phonenumber" name="phonenumber" placeholder='Numer telefonu...' required/>

        <label for="zapytanie">Zapytanie</label>
        <textarea id="subject" name="subject" placeholder="Państwa zapytanie.." style={{height: 200}}></textarea>

        <input type="submit" value="Wyślij" />

      </form>
    </div>
  )
}

