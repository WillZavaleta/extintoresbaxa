import React, { useRef, useState, useEffect } from 'react'
import { Cabeza } from '../../Cabeza/Cabeza'
import style from './Asesoria.module.css'
import imgCabeza from '../../../../../assets/servicios4.jpg'
import { Navbar } from '../../../Navbar/Navbar'
import { Contacto } from '../../../Contacto/Contacto'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'

import asesoria1 from '../../../../../assets/asesoria1.jpg'
import asesoria2 from '../../../../../assets/asesoria2.jpg'
import asesoria3 from '../../../../../assets/asesoria3.jpg'
import asesoria4 from '../../../../../assets/asesoria4.jpg'


export const Asesoria = () => {
    
  return (
    <>
            <Cabeza titulo={"Servicios de Consultoría Ambiental"} image={imgCabeza} />
            <Navbar />

            <section className={style.container} >
                <motion.h2 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                
                className={style.title}>Servicios de Consultoría Ambiental

                </motion.h2>
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}

                className={style.content}>

                    <p className={style.textoAbout}>
                        En <strong>Extintores BAXA</strong>, nos especializamos en proporcionar soluciones integrales de consultoría ambiental diseñadas para impulsar proyectos hacia un futuro sostenible. Con un equipo de expertos apasionados por el medio ambiente y la innovación, ofrecemos servicios personalizados que abarcan desde la evaluación inicial hasta la gestión continua del impacto ambiental.
                        <br />
                        <br />
                    </p>
                </motion.div>

                <motion.h2 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}

                className={style.title}>Nuestros Servicios
                </motion.h2>

                <motion.div 
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}

                className={style.content2}>
                <div className={style.backBlur2}></div>
                <img src={asesoria1} alt="imagen extintores" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>✔ Elaboración de Impactos Ambientales Estatales y Federales - PROFEPA</h3>
                        <p className={style.textoAbout}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                    <img src={asesoria2} alt="imagen vision" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>✔ Elaboración de Análisis de Riesgos Ambientales Estatales y Federales - SEMARNAT</h3>
                        <p className={style.textoAbout}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                <img src={asesoria3} alt="imagen extintores" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>✔ Elaboración de Programas Internos en Materia de Protección Civil</h3>
                        <p className={style.textoAbout}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                    <img src={asesoria4} alt="imagen vision" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>✔ Trámite de Constancias de No Afectación CFE - PEMEX - CONAGUA</h3>
                        <p className={style.textoAbout}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </motion.div>

            </section>

            <Contacto />
        </>
  )
}
