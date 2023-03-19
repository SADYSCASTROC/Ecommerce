import { useNavigate } from "react-router-dom"


export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () =>{
    navigate('/',{
      replace: true
    })
  }

  return (
    <>
    Login

    <hr />

    <button className="btn btn-primary"
    onClick={onLogin}
    >

    </button>

    </>
  )
}
