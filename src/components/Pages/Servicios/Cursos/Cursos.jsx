import { Cabeza } from '../../Cabeza/Cabeza'
import style from './Cursos.module.css'
import imgCabeza from '../../../../../assets/servicios5.jpg'
import { Navbar } from '../../../Navbar/Navbar'
import { Contacto } from '../../../Contacto/Contacto'

import curso1 from '../../../../../assets/curso1.jpg'
import curso2 from '../../../../../assets/curso2.jpg'
import curso3 from '../../../../../assets/curso3.jpg'
import curso4 from '../../../../../assets/curso4.jpg'
import curso5 from '../../../../../assets/curso5.jpg'

export const Cursos = () => {
  return (
    <>
            <Cabeza titulo={"Cursos de Capacitación en Emergencias"} image={imgCabeza} />
            <Navbar />

            <section className={style.container} >
                <h2 className={style.title}>Cursos de Capacitación en Emergencias</h2>
                <div className={style.content}>

                    <p className={style.textoAbout}>
                        En <strong>Extintores BAXA</strong>, ofrecemos cursos certificados de capacitación en emergencias diseñados para preparar a individuos y organizaciones para afrontar situaciones críticas con calma, eficacia y seguridad. Nuestros programas están diseñados y dictados por expertos en seguridad y respuesta a emergencias, y están adaptados para satisfacer las necesidades específicas de nuestros clientes.
                        <br />
                        <br />
                        <strong>Nuestra Metodología:</strong>
                        <br />
                        <br />
                        Nuestros cursos combinan instrucción teórica con actividades prácticas y escenarios de simulación realistas, lo que permite a los participantes desarrollar habilidades prácticas y confianza en su capacidad para responder efectivamente en situaciones de emergencia. Nuestros instructores altamente calificados proporcionan retroalimentación personalizada y consejos útiles para maximizar el aprendizaje y la retención de conocimientos.
                        <br />
                        <br />
                        <strong>Beneficios de Nuestros Cursos:</strong>
                        <br />
                        <br />
                        
                            <li>
                            Aumento de la confianza y la capacidad para responder ante emergencias.
                            </li>
                            <li>
                            Mejora de la seguridad y el bienestar de los empleados y miembros de la comunidad.
                            </li>
                            <li>
                            Cumplimiento con los requisitos legales y normativos en materia de seguridad y salud ocupacional.
                            </li>
                            <li>
                            Reducción del tiempo de inactividad y los costos asociados a incidentes de seguridad.
                            </li>
                        
                        <br />
                        <br />                       
                        
                    </p>
                </div>

                <h2 className={style.title}>Nuestros Cursos</h2>

                <div className={style.content2}>
                    <div className={style.backBlur2}></div>
                    <img src={curso1} alt="imagen extintores" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Curso de Uso y Manejo de Extintores</h3>
                        <p className={style.textoAbout}>
                        Capacitación diseñada para enseñar a las personas a cómo identificar, manejar y utilizar correctamente extintores en caso de incendio. El objetivo principal de este curso es proporcionar a los alumnos las habilidades y la confianza necesarias para responder de manera efectiva y segura en situaciones de emergencia que involucren incendios.
                        </p>
                    </div>
                </div>

                <div className={style.content}>
                    <div className={style.backBlur}></div>
                    <img src={curso2} alt="imagen vision" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Curso de Primeros Auxilios</h3>
                        <p className={style.textoAbout}>
                        Aprende las habilidades fundamentales para brindar primeros auxilios en una variedad de situaciones, incluyendo lesiones comunes, emergencias médicas y accidentes.
                        </p>
                    </div>
                </div>

                <div className={style.content2}>
                    <div className={style.backBlur2}></div>
                    <img src={curso3} alt="imagen about" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Curso de Manejo de Incendios y Evacuación</h3>
                        <p className={style.textoAbout}>
                        Aprende a identificar y controlar incendios de manera segura, así como a planificar y ejecutar evacuaciones eficientes en caso de emergencia.
                        </p>
                    </div>
                </div>

                <div className={style.content}>
                    <div className={style.backBlur}></div>
                    <img src={curso4} alt="imagen vision" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Curso de Formación en Rescate y Salvamento</h3>
                        <p className={style.textoAbout}>
                        Desarrolla habilidades en técnicas de rescate y salvamento en diferentes entornos, incluyendo rescate en altura, en espacios confinados y en agua.
                        </p>
                    </div>
                </div>

                <div className={style.content2}>
                    <div className={style.backBlur2}></div>
                    <img src={curso5} alt="imagen about" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Curso de Simulacros de Emergencia</h3>
                        <p className={style.textoAbout}>
                        Diseñamos y facilitamos simulacros de emergencia personalizados para empresas, instituciones educativas y comunidades, permitiendo a los participantes practicar sus habilidades en un entorno controlado.
                        </p>
                    </div>
                </div>

            </section>

            <Contacto />
        </>
  )
}
