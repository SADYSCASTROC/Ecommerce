import { useNavigate } from "react-router-dom"


export const CarritoPage = () => {
  const navigate = useNavigate();

  const onCart = () =>{
    navigate('/inicio',{
      replace: true
    })
  }

  return (
    <>
    Productos agregados 

    <hr />

    <button className="btn btn-primary"
    onClick={onCart}
    >
      Seguir comprando
    </button>

    </>
  )
}
