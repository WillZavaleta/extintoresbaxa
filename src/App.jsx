import { Route, Routes } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import styles from './App.module.css'
import { NosotrosPage } from './components/Pages/Nosotros/NosotrosPage'
import { ServiciosPage } from './components/Pages/Servicios/ServiciosPage'
import { ContactoPage } from './components/Pages/Contacto/ContactoPage'
import { Extintores } from './components/Pages/Servicios/Extintores/Extintores'
import { Home } from './components/Home/Home'
import { EquipoIncendios } from './components/Pages/Servicios/EquipoIncendios/EquipoIncendios'
import { ProteccionPersonal } from './components/Pages/Servicios/ProteccionPeronal/ProteccionPersonal'
import { Cursos } from './components/Pages/Servicios/Cursos/Cursos'
import { Asesoria } from './components/Pages/Servicios/Asesoria/Asesoria'

function App() {

  return (
    <div className={styles.App}>
       <FloatingWhatsApp phoneNumber={"+522283556682"} accountName={"Will"} statusMessage={"Normalmente responde en menos de 30 min"} chatMessage={"Hola! 🤝 \n Cómo puedo ayudarte?"} placeholder={"Escribe un mensaje"} darkMode={false} />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Nosotros" element={<NosotrosPage />}/>
        <Route path="/Servicios" element={<ServiciosPage />}/>
        <Route path="/Contacto" element={<ContactoPage />}/>
        <Route path="/venta-y-recarga-de-extintores" element={<Extintores />}/>
        <Route path="/venta-de-equipo-contra-incendios" element={<EquipoIncendios />}/>
        <Route path="/venta-de-equipo-de-proteccion-personal" element={<ProteccionPersonal />}/>
        <Route path="/cursos-de-capacitacion-en-emergencias" element={<Cursos />}/>
        <Route path="/servicios-de-consultoria-y-asesoramiento-ambiental" element={<Asesoria />}/>
      </Routes>
    </div>
  )
}

export default App
