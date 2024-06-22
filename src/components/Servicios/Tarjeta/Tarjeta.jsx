import React, { useRef, useState, useEffect } from 'react'
import { getImageUrl } from '../../../utils'
import styles from './Tarjeta.module.css'
import { NavLink } from 'react-router-dom'
import 'animate.css';

export const Tarjeta = ({project: {title, imageSrc, description, link}}) => {
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


  const scrollToTop = () => {
      window.scrollTo(0, 0)
  }
  return (
    <div ref={objetoAnimar} className={`${styles.container} ${animar && 'animate__animated animate__fadeInUp'}`}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        {/*<p className={styles.description}>{description}</p>*/}
        <div className={styles.links}>
            <NavLink to={link} className={styles.link} onClick={scrollToTop}>Ver más</NavLink>
        </div>
    </div>
  )
}
