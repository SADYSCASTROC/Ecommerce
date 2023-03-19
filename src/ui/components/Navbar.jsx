import { Link, NavLink, useNavigate } from 'react-router-dom';
import './style/navbar.css'


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogaut = () =>{
navigate('/login',{
    replace:true
})
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 navbar">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' :''}` } 
                        to="/categorias"
                    >
                        Categorias
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' :''}` } 
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button className='nav-tem nav-link btn'
                    onClick={onLogaut}
                    >
                        Logout

                    </button>
                </ul>
            </div>
        </nav>
    )
}