import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ButonCategory } from './ButonCategory';
import { Logo } from './Logo';
import './style/navbar.css'


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogaut = () => {
        navigate('/login', {
            replace: true
        })
    }

    return (

        <Nav className="navbar navbar-expand-sm  p-3 navbar navUi">

            <Link
                className="navbar-brand w-30"
                to="/"
            >
                <Logo/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        // to="/categorias"
                    >
                        <ButonCategory/>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button className='nav-tem nav-link btn buton text-#808B96'
                        onClick={onLogaut}
                    >
                        Logout

                    </button>
                </ul>
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
background-color:  #212F3D;
`