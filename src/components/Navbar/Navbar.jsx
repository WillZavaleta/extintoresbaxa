import React, { useState } from 'react'

import "./Navbar.module.css"
import styles from "./Navbar.module.css"
import closeIconUp from '../../../assets/closeIconUp.png'
import closeIconDown from '../../../assets/closeIconDown.png'
import menuIconUp from '../../../assets/menuIconUp.png'
import menuIconDown from '../../../assets/menuIconDown.png'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const changeNavbar = ()=> {
        if(window.scrollY >= 550)
            setNavbar(true);
        else
            setNavbar(false);
    }

    window.addEventListener('scroll', changeNavbar)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <nav className={`${styles.navbar} ${navbar && styles.mnufijo}`}>
            <Link className={`${styles.title} ${navbar && styles.mnufijoTitle}`} to="/" onClick={scrollToTop}>ExtintoresBAXA</Link>
            <div className={`${styles.menu} ${navbar ? styles.menuUp : styles.menuDown}`}>
                <img className={styles.menuBtn}
                    src={menuOpen ? navbar ? closeIconDown : closeIconUp : navbar ? menuIconDown : menuIconUp}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li onClick={scrollToTop} >
                        <NavLink to="/" className={({ isActive }) => {                            
                            if(isActive && navbar){
                                return styles.activeDown 
                            }else if(isActive & !navbar){
                                return styles.activeUp
                            }             
                            return navbar ? styles.mnufijoA : undefined                
                        }}>Inicio</NavLink>
                    </li>
                    <li onClick={scrollToTop} >
                        <NavLink to="/Nosotros" className={({ isActive }) => {                                                       
                            if(isActive && navbar){
                                return styles.activeDown 
                            }else if(isActive & !navbar){
                                return styles.activeUp
                            }  
                            return navbar ? styles.mnufijoA : undefined                      
                        }}>Nosotros</NavLink>
                    </li>
                    <li onClick={scrollToTop}>
                        <NavLink to="/Servicios" className={({ isActive }) => {                            
                            if(isActive && navbar){
                                return styles.activeDown 
                            }else if(isActive & !navbar){
                                return styles.activeUp
                            }             
                            return navbar ? styles.mnufijoA : undefined                 
                        }}>Servicios</NavLink>
                    </li>
                    <li onClick={scrollToTop}>
                        <NavLink to="/Contacto" className={({ isActive }) => {                            
                            if(isActive && navbar){
                                return styles.activeDown 
                            }else if(isActive & !navbar){
                                return styles.activeUp
                            }             
                            return navbar ? styles.mnufijoA : undefined                 
                        }}>Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
