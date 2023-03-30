import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom"
import { ButonAgregar } from "../components";
import { unicoProduct } from "../data";

export const ProductoInfoPage = () => {
  const [descripcionProduc, setDescripcionProduc] = useState([])
  const { id } = useParams();



  useEffect(() => {
    unicoProduct(id, setDescripcionProduc);
  }, [])


  return (

    <div className="containerproducts"  >
      <div className="cardproducts">
        <img src={descripcionProduc.thumbnail} alt="Imagen No disponible" className="imgDescripcion" />
        <div className="card-body ">
          <h2 className="title">{descripcionProduc.title}</h2>
          <p className=""> Marca: {descripcionProduc.brand}</p>
          <p className="">{descripcionProduc.description}</p>
          <p className="descuentoDescription">Descuento: {descripcionProduc.discountPercentage % 1 !== 0 ? Math.trunc(descripcionProduc.discountPercentage) : descripcionProduc.discountPercentage} %
          </p>

          <del className="descrition antes"> Antes {(descripcionProduc.price / ((100 - descripcionProduc.discountPercentage)) * 100).toFixed(1)}€</del>
          <p className="">Ahora:  {descripcionProduc.price} €</p>
          <p className=""> stock: {descripcionProduc.stock} </p>
          <div className="HoverAddCar">

            <ButonAgregar />
          </div>

        </div>
      </div>

    </div>
  )
}



