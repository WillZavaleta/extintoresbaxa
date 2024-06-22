import React, { useRef, useState, useEffect } from 'react'

import styles from './About.module.css'
import about from '../../../assets/bienvenido.jpg'
import 'animate.css';

export const About = () => {
    const [animar, setAnimar] = useState(false)
    const objetoAnimar = useRef(null)

   

    useEffect(() => {
        const animarObjeto = ()=> {
            let screenSize = window.innerHeight;
    
            if(objetoAnimar.current.getBoundingClientRect().top < screenSize + 100){
                setAnimar(true)
            }
    
        }
        window.addEventListener("scroll", animarObjeto);
  
        return () => {
          window.removeEventListener("scroll", animarObjeto);
        };
      }, []);

    

    return (
        <section ref={objetoAnimar} className={`${styles.container} ${animar && 'animate__animated animate__fadeInUp'}`} id="about">
            <h2 className={styles.title}>Bienvenido a <strong>Extintores Baxa</strong> </h2>
            <div className={styles.content}>
                <img src={about} alt="imagen about" className={styles.aboutImage}/>
                <p className={styles.textoAbout}>
                    En <strong>Extintores Baxa</strong>, nos enorgullece ser tu aliado en la protección contra incendios. Somos una empresa certificada en la <strong>NOM-154-SCFI-2005</strong>, especialistas en la venta y recarga de extintores, comprometidos con brindar soluciones de seguridad confiables y de alta calidad para tu hogar, empresa o institución. 
                    <br />
                    <br />
                    Con años de experiencia en la industria y un equipo de expertos altamente capacitados, estamos aquí para proporcionarte los mejores productos y servicios que garanticen la tranquilidad y la protección de lo que más valoras. Desde la selección cuidadosa de extintores hasta su recarga y mantenimiento, estamos contigo en cada paso del camino. 
                    <br />
                    <br />
                    Descubre cómo podemos ayudarte a fortalecer tu seguridad contra incendios hoy mismo.
                    <br />
                    <br />
                    <strong>Familia BAXA</strong>

                    
                </p>
            </div>
        </section>
    )
}
