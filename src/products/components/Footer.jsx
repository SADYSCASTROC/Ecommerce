import '../components/styles/footer.css'
import logo from '../../assets/logo.png';
import faceboock from'../../assets/facebook.png'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contenedorImgLogo'>
                <img src={logo} alt="" />
            </div>
            <div className='containerImg'>
                <p className='contacto'>Contactos</p>
                <hr />
                <img src={faceboock} alt="redes" className='redesSociales'/>
                <img src={faceboock} alt="redes" className='redesSociales'/>
                <img src={faceboock} alt="redes" className='redesSociales'/>
            </div>
        </footer>
    )
}
