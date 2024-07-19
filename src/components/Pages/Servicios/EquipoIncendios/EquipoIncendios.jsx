import React from 'react'
import { Cabeza } from '../../Cabeza/Cabeza'
import style from './EquipoIncendios.module.css'
import imgCabeza from '../../../../../assets/servicios2.jpg'
import { Navbar } from '../../../Navbar/Navbar'
import { Contacto } from '../../../Contacto/Contacto'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'

import equipo1 from '../../../../../assets/equipo1.png'
import equipo2 from '../../../../../assets/equipo2.png'
import equipo3 from '../../../../../assets/equipo3.png'
import equipo4 from '../../../../../assets/equipo4.png'
import equipo5 from '../../../../../assets/equipo5.png'

export const EquipoIncendios = () => {
  return (
    <>
    <Cabeza titulo={"Venta de Equipo Contra Incendios"} image={imgCabeza} />
    <Navbar />

    <section className={style.container} >
        <motion.h2 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.title}>Venta de Equipo Contra Incendios

        </motion.h2>
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

        className={style.content}>

            <p className={style.textoAbout}>
                En <strong>Extintores BAXA</strong>, nuestra prioridad es proporcionarte productos de calidad y un servicio excepcional. Nos dedicamos a ofrecerte una amplia gama de productos diseñados para salvaguardar vidas y propiedades en caso de emergencia. Desde extintores confiables hasta sistemas de detección de humo de última generación, estamos aquí para ayudarte a prepararte para cualquier eventualidad.
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
            <img src={equipo1} alt="imagen extintores" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Mangueras contra incendios</h3>
                <p className={style.textoAbout}>
                Estas pueden ser de diferentes tipos, como mangueras de incendio estándar o mangueras de incendio de alta presión.
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
            <img src={equipo2} alt="imagen vision" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Gabinetes para extintores</h3>
                <p className={style.textoAbout}>
                Estos son gabinetes diseñados específicamente para almacenar extintores de incendios, protegiéndolos del polvo, la humedad y el daño accidental.
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
            <img src={equipo3} alt="imagen about" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Señalización de seguridad</h3>
                <p className={style.textoAbout}>
                Esto incluye carteles, letreros y señales que indican la ubicación de los extintores, rutas de evacuación y otras medidas de seguridad contra incendios.
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
            <img src={equipo4} alt="imagen vision" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Detectores de humo y alarmas contra incendios</h3>
                <p className={style.textoAbout}>
                Estos dispositivos son fundamentales para alertar a las personas en caso de un incendio.
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
            <img src={equipo5} alt="imagen about" className={style.aboutImage} />
            <div className={style.contenedorTexto}>
                <h3>Equipo de primeros auxilios</h3>
                <p className={style.textoAbout}>
                 Equipado con suministros básicos de primeros auxilios para situaciones de emergencia.
                </p>
            </div>
        </motion.div>

    </section>

    <Contacto />
</>
  )
}
