import React, { useRef, useState, useEffect } from 'react'

import { Tarjeta } from './Tarjeta/Tarjeta'
import styles from './Servicios.module.css'
import services from '../../data/services.json'
import 'animate.css';

export const Servicios = () => {
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
        <section className={styles.container} id="servicios">
            <h2 ref={objetoAnimar} className={`${styles.title} ${animar && 'animate__animated animate__fadeInLeft'}`}>Nuestros Servicios</h2>
            <div className={styles.projects}>
                {services.map((project, id) => {
                    return (
                        <Tarjeta key={id} project={project} />
                    )

                })}
            </div>
        </section>

    )
}
