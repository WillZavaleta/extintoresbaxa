import React, { useEffect, useState, useRef } from 'react'
import { getImageUrl } from '../../utils'
import styles from './Slider.module.css'
import data from '../../data/data.json'
import logo from '../../../assets/logo.png'
import telefono from '../../../assets/telefono.png'
import { NavLink } from 'react-router-dom'

export const Slider = () => {
    const listRef = useRef();
    const [currentState, setCurrentState] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === data.length - 1) {
                setCurrentState(0)
            } else {
                setCurrentState(currentState + 1)
            }

        }, 5000)
        return () => {
            clearTimeout(timer)
        }
    }, [currentState])

    const bgImageStyle = {
        backgroundImage: `url(${getImageUrl(data[currentState].url)})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: '2s',
        filter: 'blur(0px)'
    }
    const goToNext = (id) => {
        setCurrentState(id)
    }
    return (
        <div className={styles.containerStyle}>
            <div style={bgImageStyle} className={styles.sliderAnimation}></div>
            <div className={styles.transparentBg}></div>
            <img src={logo} alt="logotipo" className={styles.logo} />

            <div>
                {data.map((item, id) => {
                    return <div key={id} className={`${styles.description} ${id === currentState ? styles.showText : styles.hideText}`}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        <NavLink to={item.link} className={styles.link}>Ver Más</NavLink>
                    </div>
                })
                }
            </div>
            {/*<div className={styles.btnContainer}> */}
            <div className={styles.containerBtn}>
                <img src={telefono} alt="Telefono icon" />
                <a href="tel:2288113478" className={styles.btnContinuar}>Llamar Ahora!</a>
            </div>

            {/*<div className={styles.flecha}>&#9207;</div>*/}
            {/*</div>*/}
            <div className={styles.carouselBoullt}>
                {
                    data.map((item, id) => (
                        <span key={item.id} className={`${id === currentState ? styles.active : ""}`} onClick={() => goToNext(id)}></span>
                    ))
                }
            </div>
        </div>
    )
}
