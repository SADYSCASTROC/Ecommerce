import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ButonCategory } from './ButonCategory';
import { Logo } from './Logo';
import carritoImg from '../../assets/carrito.png';
import login from '../../assets/loginI.png'
import searc from '../../assets/tabler_input-search.png'
export const Navbar = () => {

    const navigate = useNavigate();

    const onCart = () => {
        navigate('/carrito', {
            replace: true
        })
    }
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
            <NavLink className="buscarProducts"
                    to="/buscarProducto"
                >
                    <img src={searc} alt="" className='buscadorImg' />
                </NavLink>           
                 </div>

            <div className="navLogin">
                <div className=''
                    onClick={onLogaut}
                >
                    <img src={login} alt="" className='imgLogin' />
                </div>
            </div>

            <div className="navCarrito">
                <div className=''
                    onClick={onCart}
                >
                    <img src={carritoImg} alt="" className='imgCarrito' />
                </div>
            </div>

        </header>

    )
}

