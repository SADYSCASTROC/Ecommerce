import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom"
import { ButonAgregar } from "../components";
import { unicoProduct } from "../data";
import './productoInfoPage.css'

export const ProductoInfoPage = () => {
  const [descripcionProduc, setDescripcionProduc] = useState([])
  const { id } = useParams();



  useEffect(() => {
    unicoProduct(id, setDescripcionProduc);
  }, [])


  return (

    <div className="container" style={{ marginTop: 100 }} >

      <div className="d-flex  p-5 car">
        <img src={descripcionProduc.thumbnail} alt="Imagen No disponible" className="h-100" />
        <div className="contenedor p-5">
          <h2>{descripcionProduc.title}</h2>
          <p className="descrition"> Marca: {descripcionProduc.brand}</p>
          <p className="descrition">{descripcionProduc.description}</p>
          <p className="descrition">Descuento: {descripcionProduc.discountPercentage % 1 !== 0 ? Math.trunc(descripcionProduc.discountPercentage) : descripcionProduc.discountPercentage} %
          </p>
          
          <del className="descrition antes"> Antes € { (descripcionProduc.price/( (100-descripcionProduc.discountPercentage))*100) .toFixed(1)}</del>
          <p className="descrition">Ahora: € {descripcionProduc.price}</p>
          <p className="descrition"> stock: {descripcionProduc.stock} </p>
          <ButonAgregar/>
        </div>
      </div>

    </div>
  )
}



