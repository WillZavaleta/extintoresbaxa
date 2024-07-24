import React, { useRef, useState, useEffect } from 'react'

import styles from './Contacto.module.css'
import email from '../../../assets/emailIcon.png'
import telefono from '../../../assets/telefonoIcon.png'
import pin from '../../../assets/pinIcon.png'
import facebook from '../../../assets/faceIcon.png'
import tiras from '../../../assets/tiras_small.png'

import 'animate.css';

export const Contacto = () => {
    const [animar, setAnimar] = useState(false)
    const [animar2, setAnimar2] = useState(false)
    const objetoAnimar = useRef(null)

    useEffect(() => {
        const animarObjeto = () => {
            let screensize = window.innerHeight;
    
            if (objetoAnimar.current.getBoundingClientRect().top < screensize + 50) {
                setAnimar2(true)
                setAnimar(true)
            }else{
                setAnimar(false)
            }
        }
        window.addEventListener("scroll", animarObjeto);
  
        return () => {
          window.removeEventListener("scroll", animarObjeto);
        };
      }, []);

    return (
        <div>
            <footer id="contact" className={`${styles.container}`}>
                <div className={styles.text}>
                    <h2 ref={objetoAnimar} className={`${animar && 'animate__animated animate__heartBeat'}`}>Contacto</h2>
                    <p>¿Necesitas asesoria? No dudes en contactarnos!</p>
                </div>
                <ul className={styles.links}>
                    <li ref={objetoAnimar} className={`${styles.link} ${animar && 'animate__animated animate__fadeInUp animate__delay-1s'}`}>
                        <img src={telefono} alt="Telefono icon" />
                        <a href="tel:2288113478">228 811 3478</a>
                    </li>
                    <li ref={objetoAnimar} className={`${styles.link} ${animar && 'animate__animated animate__fadeInUp animate__delay-1s'}`}>
                        <img src={email} alt="Email icon" />
                        <a href="mailto:zavaleta.will@gmail.com">contacto@gmail.com</a>
                    </li>
                    <li ref={objetoAnimar} className={`${styles.link} ${animar && 'animate__animated animate__fadeInUp animate__delay-1s'}`}>
                        <img src={facebook} alt="Facebook icon" />
                        <a href="https://www.facebook.com/ServiBaxa" target="_blank">ServiBaxa</a>
                    </li>
                   {/* <li ref={objetoAnimar} className={`${styles.link} ${animar && 'animate__animated animate__fadeInUp animate__delay-1s'}`}>
                        <img src={pin} alt="Pin icon" />
                        <a href="https://maps.app.goo.gl/3wzLUHhyTBNgywDd9" target='_blank'>C. Nuevo León 412-Local 3, Progreso Macuiltepetl, 91018 Xalapa, Ver</a>
                    </li>*/}
                </ul>   
                <img className={styles.tiras} src={tiras} alt="" />    
            </footer>            
            <div className={styles.marca}>
                <p>Extintores BAXA | 2024</p>
            </div>
        </div>

    )
}
