import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from '../../Navbar/Navbar'
import style from './NosotrosPage.module.css'
import imgCabeza from '../../../../assets/slide4.jpeg'
import { Contacto } from '../../Contacto/Contacto'
import about from '../../../../assets/about.jpg'
import imgVision from '../../../../assets/vision.jpg'
import { Cabeza } from '../Cabeza/Cabeza'
import 'animate.css'

export const NosotrosPage = () => {
  const [animar, setAnimar] = useState(false)
  const [animar2, setAnimar2] = useState(false)
  const [animar3, setAnimar3] = useState(false)
  const objetoAnimar = useRef(null)
  const objetoAnimar2 = useRef(null)
  const objetoAnimar3 = useRef(null)

  useEffect(() => {
    const animarObjeto = () => {
      let screensize = window.innerHeight;

      if (objetoAnimar.current.getBoundingClientRect().top < screensize + 50) {
        setAnimar(true)
      }

      if (objetoAnimar2.current.getBoundingClientRect().top < screensize + 300) {
        setAnimar2(true)
      }

      if (objetoAnimar3.current.getBoundingClientRect().top < screensize + 400) {
        setAnimar3(true)
      }
    }
    window.addEventListener("scroll", animarObjeto)

    return () => {
      window.removeEventListener("scroll", animarObjeto);
    };
  }, []);



  return (
    <>
      <Cabeza titulo={"Nosotros"} image={imgCabeza} />
      <Navbar />
      <section ref={objetoAnimar} className={style.container} >
        <h2 className={`${style.title} ${animar && 'animate__animated animate__fadeInLeft'}`}>¿Quiénes somos?</h2>
        <div className={`${style.content} ${animar && 'animate__animated animate__fadeInUp'}`}>

          <p className={style.textoAbout}>
            En <strong>Extintores BAXA</strong> somos una empresa certificada en la <strong>NOM-154-SCFI-2005</strong>, dedicada a proporcionar soluciones integrales de seguridad contra incendios para empresas, instituciones y hogares. Con años de experiencia en la industria, nos hemos consolidado como líderes en la distribución, instalación y mantenimiento de extintores y equipos de protección contra incendios.
            <br />
            <br />
            Nuestro compromiso es garantizar la seguridad y protección de nuestros clientes en todo momento. Nos enorgullece ofrecer productos de la más alta calidad, respaldados por un equipo de profesionales altamente capacitados y certificados en normativas de seguridad contra incendios.
            <br />
            <br />
            En <strong>Extintores BAXA</strong>, entendemos la importancia de la prevención y la preparación ante emergencias. Por ello, trabajamos de cerca con nuestros clientes para diseñar soluciones a medida que se adapten a sus necesidades específicas y cumplan con los más altos estándares de seguridad.
            <br />
            <br />
            Desde la instalación inicial hasta el mantenimiento periódico, nuestro compromiso con la excelencia y la atención al cliente nos distingue. Estamos aquí para proteger lo que más importa: vidas y propiedades.
            <br />
            <br />
            En resumen, en <strong>Extintores BAXA</strong> somos más que un proveedor de extintores; somos su socio confiable en seguridad contra incendios.
          </p>
        </div>

        <div ref={objetoAnimar2} className={style.content2}>
          <img src={about} alt="imagen about" className={`${style.aboutImage} ${animar2 && 'animate__animated animate__fadeInRight'}`} />
          <div className={`${style.contenedorTexto} ${animar2 && 'animate__animated animate__fadeInLeft'}`}>
            <h3>  Nuestra Misión</h3>
            <p className={style.textoAbout}>
              Proporcionar soluciones de seguridad contra incendios confiables y eficaces a nuestros clientes, ofreciendo productos de alta calidad y servicios especializados. Nos comprometemos a salvaguardar vidas y proteger propiedades mediante la prevención y la rápida respuesta ante emergencias.

            </p>
          </div>
        </div>

        <div ref={objetoAnimar3} className={style.content}>
          <img src={imgVision} alt="imagen vision" className={`${style.aboutImage} ${animar3 && 'animate__animated animate__fadeInLeft'}`} />
          <div className={`${style.contenedorTexto} ${animar3 && 'animate__animated animate__fadeInRight'}`}>
            <h3>  Nuestra Visión</h3>
            <p className={style.textoAbout}>
              Ser líderes reconocidos en la industria de la seguridad contra incendios, innovando constantemente para ofrecer productos y servicios que superen las expectativas de nuestros clientes. Aspiramos a ser la primera opción para empresas, instituciones y hogares que buscan garantizar un entorno seguro y protegido contra incendios en todo momento.
            </p>
          </div>

        </div>
      </section>

      <Contacto />

    </>

  )
}
