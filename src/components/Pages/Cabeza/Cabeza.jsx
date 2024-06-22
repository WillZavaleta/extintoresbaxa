import style from './Cabeza.module.css'
import 'animate.css';

export const Cabeza = ({ titulo, image }) => {
  const bgImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    transition: '1s',
    filter: 'blur(0px)'
  }
  return (
    <header className={style.contenedorCabeza}>
      <div style={bgImageStyle}></div>
      <div className={style.transparentBg}></div>
      <div className={`${style.titulo} ${"animate__animated animate__fadeInLeft"}`}>
        <h1>{titulo}</h1>
      </div>
    </header>
  )
}
