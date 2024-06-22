import { About } from "../About/About"
import { Clientes } from "../Clientes/Clientes"
import { Contacto } from "../Contacto/Contacto"
import { Navbar } from "../Navbar/Navbar"
import { Servicios } from "../Servicios/Servicios"
import { Slider } from "../Slider/Slider"

export const Home = () => {
    return (
        <>
            <Slider />
            <Navbar />
            <About />
            <Servicios />
            <Clientes />
            <Contacto />
        </>

    )
}
