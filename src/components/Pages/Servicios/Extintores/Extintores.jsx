import { Cabeza } from '../../Cabeza/Cabeza'
import style from './Extintores.module.css'
import imgCabeza from '../../../../../assets/servicios1.jpg'
import { Navbar } from '../../../Navbar/Navbar'
import { Contacto } from '../../../Contacto/Contacto'

import extintores1 from '../../../../../assets/extintores1.png'
import extintores2 from '../../../../../assets/extintores2.png'
import extintores3 from '../../../../../assets/extintores3.png'
import extintores4 from '../../../../../assets/extintores4.png'

export const Extintores = () => {
    return (
        <>
            <Cabeza titulo={"Venta y Recarga de Extintores"} image={imgCabeza} />
            <Navbar />

            <section className={style.container} >
                <h2 className={style.title}>Venta y Recarga de Extintores</h2>
                <div className={style.content}>

                    <p className={style.textoAbout}>
                        En <strong>Extintores BAXA</strong> proporcionamos servicios de recarga y mantenimiento para garantizar que los extintores estén en óptimas condiciones de funcionamiento, cumpliendo con los estándares de seguridad y regulaciones locales.
                        <br />
                        <br />
                        También frecemos una selección diversa de extintores de alta calidad diseñados para abordar una variedad de riesgos de incendio. Desde extintores de polvo químico seco hasta extintores de dióxido de carbono y más, nuestra gama de productos está respaldada por marcas confiables y estándares de seguridad rigurosos.
                        <br />
                        <br />
                    </p>
                </div>

                <h2 className={style.title}>Nuestros Productos</h2>

                <div className={style.content2}>
                    <div className={style.backBlur2}></div>
                    <img src={extintores1} alt="imagen extintores" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Extintores de polvo químico seco (PQS)</h3>
                        <p className={style.textoAbout}>
                            Estos extintores son versátiles y efectivos para combatir incendios de clase A, B y C, que involucran materiales combustibles como madera, líquidos inflamables y equipos eléctricos energizados.
                        </p>
                    </div>
                </div>

                <div className={style.content}>
                    <div className={style.backBlur}></div>
                    <img src={extintores2} alt="imagen vision" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Extintores de dióxido de carbono (CO2)</h3>
                        <p className={style.textoAbout}>
                            Ideales para fuegos de clase B y C, los extintores de CO2 eliminan el oxígeno del fuego y son efectivos para apagar incendios en equipos eléctricos y líquidos inflamables sin dejar residuos químicos.
                        </p>
                    </div>
                </div>

                <div className={style.content2}>
                    <div className={style.backBlur2}></div>
                    <img src={extintores3} alt="imagen about" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Extintores de agua</h3>
                        <p className={style.textoAbout}>
                            Diseñados para incendios de clase A que implican materiales sólidos como madera, papel y textiles. Estos extintores utilizan agua presurizada para enfriar y extinguir el fuego.            </p>
                    </div>
                </div>

                <div className={style.content}>
                    <div className={style.backBlur}></div>
                    <img src={extintores4} alt="imagen vision" className={style.aboutImage} />
                    <div className={style.contenedorTexto}>
                        <h3>Extintores de espuma</h3>
                        <p className={style.textoAbout}>
                        Adecuados para incendios de clase A y B, los extintores de espuma forman una capa sobre el combustible, sofocando las llamas y evitando su propagación.                        </p>
                    </div>
                </div>

            </section>

            <Contacto />
        </>
    )
}
