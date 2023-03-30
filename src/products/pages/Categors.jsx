import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categoryProductsFilter } from "../data";
import { ButonAgregar } from "../components";

export const Categors = () => {

  const [categorrsFilter, setCategorrsFilter] = useState([])
  const { nameCategory } = useParams();


  useEffect(() => {
    categoryProductsFilter(nameCategory, setCategorrsFilter);
  }, [categorrsFilter])

  return (

    <div className="containerProductsCategory" >
      <h3 className="center_category">{nameCategory.toUpperCase()}</h3>
      <div className="containerProductosMain">

        {
          categorrsFilter.map(item => (
            <div key={item.id} className="cardProdustosMain">
              <div className="imgProducdiv">
                <Link to={`/ProductoInfo/${item.id}`} className='' >

                  <img src={item.thumbnail} alt="producto" className="ImagesProducts" />

                </Link>
              </div>
              <div className="card-body">
                <p className=" descuento ">
                  {(item.discountPercentage).toFixed(1)} % <br /> DTO
                </p>
                <h6 className="card-title">{item.title}</h6>
                {/* <p className="ahoraANtes"> {desc.stock} unidad</p> */}
                <del className="descrition antes"> Antes € {(item.price / ((100 - item.discountPercentage)) * 100).toFixed(1)}</del>
                <p className="ahoraANtes">Ahora € {item.price}   - stock: {item.stock} </p>

                <div className="HoverAddCar">
                  <ButonAgregar />
                </div>
              </div>

            </div>
          ))
        }

      </div>
    </div >
  )
}

