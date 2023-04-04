import { useNavigate } from "react-router-dom";
export const Login = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/inicio', {
            replace: true
        })
    }

    return (
        <div>
            login 
            <hr />
            <button className="btn btn-primary"
                onClick={onLogin}
            >
                Salir
            </button>

        </div>
    )
}
