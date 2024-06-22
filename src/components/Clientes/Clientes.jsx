import React, { useRef, useState, useEffect } from 'react'
import { getImageUrl } from '../../utils'
import styles from './Clientes.module.css'
import clientes from '../../data/clientes.json'
import 'animate.css'

export const Clientes = () => {
    const [animar, setAnimar] = useState(false)
    const [animar2, setAnimar2] = useState(false)
    const objetoAnimar = useRef(null)
    //const objetoAnimar2 = useRef(null)

    useEffect(() => {
        const animarObjeto = ()=> {
            let screenSize = window.innerHeight;
    
            if(objetoAnimar.current.getBoundingClientRect().top < screenSize + 100){
                setAnimar(true)
                setAnimar2(true)
            }else{
                setAnimar(false)
            }
    
           /* if(objetoAnimar2.current.getBoundingClientRect().top < screenSize + 100){
                setAnimar2(true)
            }*/
        }
        window.addEventListener("scroll", animarObjeto);
  
        return () => {
          window.removeEventListener("scroll", animarObjeto);
        };
      }, []);


  return (
    <section className={styles.container} id="clientes">
        <h2 ref={objetoAnimar} className={`${styles.title} ${animar2 && 'animate__animated animate__bounceInLeft'}`}>Algunos de nuestros clientes</h2>
        <div className={styles.content}>
            <div className={styles.clientes}>
                {clientes.map((cliente, id)=>{
                    return(
                        <div key={id} className={`${styles.clienteImageContainer} ${animar ? 'animate__animated animate__bounceIn animate__delay-1s':''}`}>
                            
                            <img src={getImageUrl(cliente.imageSrc)} alt={cliente.title} />
                            
                        </div>
                    )

                })

                }
            </div>
        </div>
    </section>
  )
}
