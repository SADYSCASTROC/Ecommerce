import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { products } from "../data"
import { ButonAgregar } from "./ButonAgregar";


export const CardPro = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    products(setProducts)
  }, [])


  return (
    <div className="containerProductosMain">

      {
        product.map(desc => (
          <div key={desc.id} className="cardProdustosMain">
            <div className="imgProducdiv">
              <Link to={`/ProductoInfo/${desc.id}`}>

                <img className="ImagesProducts "

                  src={desc.thumbnail} alt="producto" />
              </Link>
            </div>


            <div className="card-body">
              <p className=" descuento "> 
                {(desc.discountPercentage).toFixed(1)} % <br />  <span className="descu">DTO <br /></span> 
              </p> 
              <h6 className="card-title">{desc.title}</h6>
              {/* <p className="ahoraANtes"> {desc.stock} unidad</p> */}
              <del className="descrition antes"> Antes ${(desc.price / ((100 - desc.discountPercentage)) * 100).toFixed(1)} € </del>

              <p className="ahoraANtes">Ahora  ${desc.price} € <br />
                stock: {desc.stock} </p>
              <div className="HoverAddCar">
                <ButonAgregar />
              </div>
            </div>
          </div>

        ))
      }

    </div>
  )
}
