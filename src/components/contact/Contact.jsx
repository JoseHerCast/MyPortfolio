import React, { useRef } from "react"
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hb8n2i7", "template_sjevue7", form.current, "yX8F5O5c2zO7FrBQS")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }

    return (
        <section id='contact'>
            <h5>Dejame saber de ti</h5>
            <h2>Contáctame</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>jose_hernandez_c@outlook.com</h5>
                        <a href="mailto:jose_hernandez_c@outlook.com">Enviar mensaje</a>
                    </article>
                    <article className='contact_option'>
                        <BsLinkedin className='contact_option-icon' />
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/jose-hernandez-wd/" target="_blank"><h5>/jose-hernandez-wd</h5></a>
                    </article>
                </div>
                <div className="contact_options">
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+52 55 5053 3845</h5>
                        <a href="https://wa.me/+525550533845" target="_blank">Enviar mensaje</a>
                    </article>
                    <article className='contact_option'>
                        <BsGithub className='contact_option-icon' />
                        <h4>Github</h4>
                        <a href="https://github.com/JoseHerCast" target="_blank"><h5>JoseHerCast</h5></a>
                    </article>
                </div>
                {/* FIN DE OPCIONES DE CONTACTO */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Nombre" required />
                    <input type="email" name="email" placeholder="Dirección de correo" required />
                    <textarea name="message" rows="7" placeholder='Mensaje' required></textarea>
                    <button type='submit' value="Send" className='btn btn-primary'>Enviar mensaje</button>
                </form>
            </div>
        </section>
    )
}

export default Contact