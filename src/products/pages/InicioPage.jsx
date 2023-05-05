import { CardPro } from '../components';
import imagen1 from'../../assets/imageCarruse1.jpg'
import imagen2 from'../../assets/imagescarrusel.jpg'
import imagen3 from'../../assets/imagesCarrusel2.png'
import imagen4 from'../../assets/imagesCarrusel4.jpg'
import imagen6 from'../../assets/imagesCarrusel6.jpg'


export const InicioPage = () => {
  return (
    <main className='mainInicio'>
      <section className='carruselInicio'>
        <div className='carruselImgCont'> <img src={imagen1} alt=""  className='carruselImg'/></div>
        <div className='carruselImgCont'> <img src={imagen2} alt=""  className='carruselImg' /></div>
        <div className='carruselImgCont'> <img src={imagen3} alt=""  className='carruselImg' /></div>
        <div className='carruselImgCont'> <img src={imagen4} alt=""  className='carruselImg' /></div>
        <div className='carruselImgCont'> <img src={imagen6} alt=""  className='carruselImg' /></div>

      </section>

      <CardPro />
    </main>
  )
}
