import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ButonCategory } from './ButonCategory';
import { Logo } from './Logo';
import carritoImg from '../../assets/carrito.png';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogaut = () => {
        navigate('/login', {
            replace: true
        })
    }

    return (
        <header>

            <Link
                className="logoHeader"
                to="/"
            >
                <Logo />
            </Link>

            <div className="linksButonInico">

                <NavLink
                    className=""
                >
                    <ButonCategory />
                </NavLink>

                <NavLink className="linkInicio"
                    to="/inicio"
                >
                    Inicio
                </NavLink>
            </div>

            <div className="containerBuscador">
                <input type="text" placeholder='Buscar productos' name="" id=""  className='buscador'/>
            </div>

            <div className="navCarrito">
                <div className=''
                    onClick={onLogaut}
                >
                    <img src={carritoImg} alt="" className='imgCarrito' />
                </div>
            </div>

        </header>

    )
}

