import React from "react";
import BanerLeft from "../assets/baner2.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BanerLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Napisz do Nas</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Imię i Nazwisko</label>
          <input name="name" placeholder="" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="" type="email" />
          <label htmlFor="message">Wiadomość</label>
          <textarea
            rows="6"
            placeholder=""
            name="message"
            required
          ></textarea>
          <button type="submit"> Wyślij wiadomość</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
