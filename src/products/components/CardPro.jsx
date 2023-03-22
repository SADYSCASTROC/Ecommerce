import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { products } from "../data"
import imgAvalable from '../../assets/avalaible.png';
import './styles/cardPro.css'
import { ButonAgregar } from "./ButonAgregar";


export const CardPro = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    products(setProducts)
  }, [])


  return (
    <>

      {
        product.map(desc => (
          <div key={desc.id} className="col-3 p-3  ">
            <div
              className="card   cardP w-100"
            >
              <div className="imgProduc">
                <Link to={`/ProductoInfo/${desc.id}`}>

                  <img className="card-img-top images "

                    src={desc.thumbnail} alt="producto" />
                </Link>
              </div>


              <div className="card-body">
                <p className="card-text descuento "> <br />
                  {(desc.discountPercentage).toFixed(1)} % <br /> DTO
                </p>
                <h6 className="card-title">{desc.title}</h6>
                {/* <p className="ahoraANtes"> {desc.stock} unidad</p> */}
                <del className="descrition antes"> Antes € { (desc.price/( (100-desc.discountPercentage))*100).toFixed(1)}</del>

                <p className="ahoraANtes">Ahora € {desc.price}  <br />
                 stock: {desc.stock} </p> 
                <div className="HoverAddCar">
                  <ButonAgregar />
                </div>
              </div>
            </div>
          </div>

        ))
      }

    </>
  )
}
