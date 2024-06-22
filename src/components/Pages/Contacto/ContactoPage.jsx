import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import styles from './ContactoPage.module.css'
import imgCabeza from '../../../../assets/slide4.jpeg'
import { Contacto } from '../../Contacto/Contacto'
import { Cabeza } from '../Cabeza/Cabeza'
import { Navbar } from '../../Navbar/Navbar'
import 'animate.css'

export const ContactoPage = () => {
    const [animar, setAnimar] = useState(false)
    const objetoAnimar = useRef(null)
    const form = useRef()

    useEffect(() => {
        const animarObjeto = () => {
            let screenSize = window.innerHeight;

            if (objetoAnimar.current.getBoundingClientRect().top < screenSize + 100) {
                setAnimar(true)
            }
        }
        window.addEventListener("scroll", animarObjeto);

        return () => {
            window.removeEventListener("scroll", animarObjeto);
        };
    }, []);



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1z48poh', 'template_yf6295u', form.current, {
                publicKey: 'R_IJQ7jNL8oZySemU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    //Swal.fire("¡Mensaje Enviado!", "¡Pronto nos pondremos en contacto contigo!", "success");
                    Swal.fire({
                        showCloseButton: true,
                        icon: "success",
                        title: "¡Mensaje Enviado!",
                        text: "¡Pronto nos pondremos en contacto contigo!",
                        showConfirmButton: true,
                        confirmButtonText: "Continuar",
                        confirmButtonColor: "#2e2d2d",
                        background: "linear-gradient(180deg, #2e2d2d 0%, #ec2c2f 100%)",
                        color: "#fff",
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <Cabeza titulo={"Contacto"} image={imgCabeza} />
            <Navbar />
            <section ref={objetoAnimar} className={styles.container} id="contacto">
                <h2 className={`${styles.title} ${animar && 'animate__animated animate__fadeInLeft'}`}>¡Ponte en contacto con nosotros!</h2>
                <div className={styles.content}>
                    <div className={`${styles.mapa} ${animar && 'animate__animated animate__fadeInUp'}`}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15039.656718403132!2d-96.9252353!3d19.5452977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f60c5d5f09d%3A0xb125c255f410a239!2sServicios%20BAXA%20extintores!5e0!3m2!1ses-419!2smx!4v1719001141194!5m2!1ses-419!2smx" width="900" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>

                    <form ref={form} className={`${styles.formulario} ${animar && 'animate__animated animate__fadeInUp animate__delay-1s'}`} onSubmit={sendEmail}>
                        <label>Nombre</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Mensaje</label>
                        <textarea name="message" />
                        <input type="submit" value="Enviar" />
                    </form>
                </div>

            </section>
            <Contacto />
        </>


    )
}
