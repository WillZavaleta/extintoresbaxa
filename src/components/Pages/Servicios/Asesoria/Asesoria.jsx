import { Cabeza } from '../../Cabeza/Cabeza'
import style from './Asesoria.module.css'
import imgCabeza from '../../../../../assets/servicios4.jpg'
import { Navbar } from '../../../Navbar/Navbar'
import { Contacto } from '../../../Contacto/Contacto'

import asesoria1 from '../../../../../assets/asesoria1.jpg'
import asesoria2 from '../../../../../assets/asesoria2.jpg'
import asesoria3 from '../../../../../assets/asesoria3.jpg'
import asesoria4 from '../../../../../assets/asesoria4.jpg'


export const Asesoria = () => {
  return (
    <>
            <Cabeza titulo={"Consultoría Ambiental"} image={imgCabeza} />
            <Navbar />

            <section className={style.container} >
                <h2 className={style.title}>Consultoría y Asesoramiento Ambiental</h2>
                <div className={style.content}>

                    <p className={style.textoAbout}>
                        En <strong>Extintores BAXA</strong>, nos especializamos en proporcionar soluciones integrales de consultoría ambiental diseñadas para impulsar proyectos hacia un futuro sostenible. Con un equipo de expertos apasionados por el medio ambiente y la innovación, ofrecemos servicios personalizados que abarcan desde la evaluación inicial hasta la gestión continua del impacto ambiental.
                        <br />
                        <br />
                    </p>
                </div>

                <h2 className={style.title}>Nuestros Servicios</h2>

                <div className={style.content2}>
                <div className={style.backBlur2}></div>
                <img src={asesoria1} alt="imagen extintores" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>✔ Elaboración de Impactos Ambientales Estatales y Federales - PROFEPA</h3>
                        <p className={style.textoAbout}>
                        Capacitación diseñada para enseñar a las personas a cómo identificar, manejar y utilizar correctamente extintores en caso de incendio. El objetivo principal de este curso es proporcionar a los alumnos las habilidades y la confianza necesarias para responder de manera efectiva y segura en situaciones de emergencia que involucren incendios.
                        </p>
                    </div>
                </div>

                <div className={style.content}>
                <div className={style.backBlur}></div>
                    <img src={asesoria2} alt="imagen vision" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>✔ Elaboración de Análisis de Riesgos Ambientales Estatales y Federales - SEMARNAT</h3>
                        <p className={style.textoAbout}>
                        Aprende las habilidades fundamentales para brindar primeros auxilios en una variedad de situaciones, incluyendo lesiones comunes, emergencias médicas y accidentes.
                        </p>
                    </div>
                </div>

                <div className={style.content2}>
                <div className={style.backBlur2}></div>
                <img src={asesoria3} alt="imagen extintores" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>✔ Elaboración de Programas Internos en Materia de Protección Civil</h3>
                        <p className={style.textoAbout}>
                        Aprende a identificar y controlar incendios de manera segura, así como a planificar y ejecutar evacuaciones eficientes en caso de emergencia.
                        </p>
                    </div>
                </div>

                <div className={style.content}>
                <div className={style.backBlur}></div>
                    <img src={asesoria4} alt="imagen vision" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>✔ Trámite de Constancias de No Afectación CFE - PEMEX - CONAGUA</h3>
                        <p className={style.textoAbout}>
                        Desarrolla habilidades en técnicas de rescate y salvamento en diferentes entornos, incluyendo rescate en altura, en espacios confinados y en agua.
                        </p>
                    </div>
                </div>

            </section>

            <Contacto />
        </>
  )
}
