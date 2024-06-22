import React from 'react'

import { Tarjeta } from '../../Servicios/Tarjeta/Tarjeta'
import { Contacto } from '../../Contacto/Contacto'
import { Cabeza } from '../Cabeza/Cabeza'
import { Navbar } from '../../Navbar/Navbar'
import imgCabeza from '../../../../assets/slide4.jpeg'
import styles from './ServiciosPage.module.css'
import services from '../../../data/services.json'

export const ServiciosPage = () => {
  return (
    <>
      <Cabeza titulo={"Servicios"} image={imgCabeza} />
      <Navbar />
      <section className={styles.container} id="servicios">
        <h2 className={styles.title}>Nuestros Servicios</h2>
        <div className={styles.projects}>
          {services.map((project, id) => {
            return (
              <Tarjeta key={id} project={project} />
            )

          })}
        </div>
      </section>
      <Contacto />

    </>

  )
}

