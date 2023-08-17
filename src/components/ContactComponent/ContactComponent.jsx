import React, { useState, useRef } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import redes from "../../../public/redes.json";

function ContactComponent() {
  console.log("redes");
  console.log(redes);
  const [formName, setFormName] = useState();
  const [formSurname, setFormSurname] = useState();
  const [formEmail, setFormEmail] = useState();
  const [formMessage, setFormMessage] = useState();

  const form = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_oxjmqnd",
      "template_o80c0el",
      {
        from_name: "Borja",
        to_name: formName + " " + formSurname,
        message: formMessage,
        reply_to: formEmail,
      },
      "Lbix6O2NwDuZJPRYl"
    );
  };

  return (
    <>
      <p>¿Quieres contactar conmigo?</p>
      <p>Rellena el siguiente formulario: </p>

      <fieldset>
        <form ref={form} onSubmit={handleSubmitForm}>
          <ul>
            <fieldset>
              <li>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
                <label htmlFor="last-name">Apellidos</label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  value={formSurname}
                  onChange={(e) => setFormSurname(e.target.value)}
                />
              </li>

              <li>
                <label htmlFor="asunto">email</label>
                <input
                  type="email"
                  name="asunto"
                  id="asunto"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                />
              </li>
            </fieldset>
            <fieldset>
              <li>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  cols={60}
                  rows={8}
                  required
                  wrap="soft"
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                />
              </li>
            </fieldset>
          </ul>
          <button type="submit">Enviar</button>
        </form>
      </fieldset>

      <section className="redes">
        <p>También puedes visitar mis redes</p>
        <ul>
          {redes.map((r) => {
            return (
              <li key={r.id}>
                {r.name !== "Email" ? (
                  <Link
                    to={`${r.url}`}
                    target="_blank"
                    className={`${r.icon} icon`}
                  ></Link>
                ) : (
                  <a href={`mailto:${r.url}`}>
                    <img src={`${r.icon}`} alt="" />
                  </a>
                )}
              </li>
            );
          })}
          {/* <li>
            <Link to="" target="_blank" className="github_icon icon">
              Github
            </Link>
          </li>
          <li>
            <Link target="_blank" className="linkedin_icon icon">
              linkedin
            </Link>
          </li>
          <li>
            <Link target="_blank" className="email_icon icon">
              email
            </Link>
          </li> */}
        </ul>
      </section>
    </>
  );
}

export default ContactComponent;
