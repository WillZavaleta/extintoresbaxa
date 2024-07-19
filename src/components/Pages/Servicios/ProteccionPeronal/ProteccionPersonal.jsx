import React from 'react'
import { Cabeza } from '../../Cabeza/Cabeza'
import style from './ProteccionPersonal.module.css'
import imgCabeza from '../../../../../assets/servicios3.jpg'
import { Navbar } from '../../../Navbar/Navbar'
import { Contacto } from '../../../Contacto/Contacto'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'

import proteccion1 from '../../../../../assets/proteccion1.png'
import proteccion2 from '../../../../../assets/proteccion2.png'
import proteccion3 from '../../../../../assets/proteccion3.png'
import proteccion4 from '../../../../../assets/proteccion4.png'
import proteccion5 from '../../../../../assets/proteccion5.png'
import proteccion6 from '../../../../../assets/proteccion6.png'

export const ProteccionPersonal = () => {
  return (
    <>
    <Cabeza titulo={"Venta de Equipo de Protección Personal"} image={imgCabeza} />
    <Navbar />

    <section className={style.container} >
        <motion.h2 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        
        className={style.title}>Venta de Equipo de Protección Personal
        </motion.h2>

        
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.content}>

            <p className={style.textoAbout}>
                La seguridad de quienes combaten incendios es fundamental. En <strong>Extintores BAXA</strong>, ofrecemos equipos de protección personal de alta calidad, como trajes ignífugos, cascos y guantes, para garantizar la seguridad de tu equipo de respuesta contra incendios.
                <br />
                <br />
            </p>
        </motion.div>

        <motion.h2 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.title}>Nuestros Productos
        </motion.h2>

        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.content2}>
            <div className={style.backBlur2}></div>
            <img src={proteccion1} alt="imagen extintores" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Trajes Ignífugos</h3>
                <p className={style.textoAbout}>
                Estos trajes están diseñados específicamente para resistir altas temperaturas y proteger al usuario de quemaduras en caso de exposición al fuego.
                </p>
            </div>
        </motion.div>

        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.content}>
            <div className={style.backBlur}></div>
            <img src={proteccion2} alt="imagen vision" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Casco para Bomberos</h3>
                <p className={style.textoAbout}>
                Los cascos de bombero están diseñados para proporcionar protección contra golpes y caídas de objetos, así como para resistir altas temperaturas y llamas.
                </p>
            </div>
        </motion.div>

        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.content2}>
            <div className={style.backBlur2}></div>
            <img src={proteccion3} alt="imagen about" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Guantes Ignífugos</h3>
                <p className={style.textoAbout}>
                Los guantes ignífugos están hechos de materiales resistentes al calor y al fuego, y proporcionan protección para las manos del usuario durante la manipulación de objetos calientes o en llamas.
                </p>
            </div>
        </motion.div>

        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.content}>
            <div className={style.backBlur}></div>
            <img src={proteccion4} alt="imagen vision" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Botas de Protección</h3>
                <p className={style.textoAbout}>
                Las botas diseñadas para protección contra incendios suelen tener suelas resistentes al calor y al fuego, así como punteras de acero para proteger los pies del usuario de objetos pesados o afilados.
                </p>
            </div>
        </motion.div>

        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.content2}>
            <div className={style.backBlur2}></div>
            <img src={proteccion5} alt="imagen about" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Gafas de Protección</h3>
                <p className={style.textoAbout}>
                Las gafas de protección contra incendios están diseñadas para proteger los ojos del usuario de chispas, llamas y materiales volátiles durante la lucha contra incendios.
                </p>
            </div>
        </motion.div>

        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.content}>
            <div className={style.backBlur}></div>
            <img src={proteccion6} alt="imagen vision" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Capuchas de Protección</h3>
                <p className={style.textoAbout}>
                Las capuchas ignífugas proporcionan protección para la cabeza, el cuello y la cara del usuario contra el calor y las llamas, así como contra el humo y los productos químicos peligrosos.
                </p>
            </div>
        </motion.div>

    </section>

    <Contacto />
</>
  )
}
