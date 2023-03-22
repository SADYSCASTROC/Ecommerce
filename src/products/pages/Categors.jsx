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

    <div className="" style={{ marginTop: 77 }}>
      <h3 className="center_category">{nameCategory.toUpperCase()}</h3>
      <div className="row m-5 ">

      {
        categorrsFilter.map(item => (
          <div key={item.id} className="col-3 p-3  ">
          <div className=" cardP card m-2">
            <Link to={`/ProductoInfo/${item.id}`} className='links' >
            <div className="imgProduc">
              <img src={item.thumbnail} alt="producto"  className="card-img-top images"/>
            </div>
            </Link>
            <div className="card-body">
            <p className="card-text descuento "> <br />
                  {(item.discountPercentage).toFixed(1) } % <br /> DTO
                </p>
                <h6 className="card-title">{item.title}</h6>
                {/* <p className="ahoraANtes"> {desc.stock} unidad</p> */}
                <del className="descrition antes"> Antes € { (item.price/( (100-item.discountPercentage))*100) .toFixed(1)}</del>
                <p className="ahoraANtes">Ahora € {item.price}   - stock: {item.stock} </p>

            <div className="HoverAddCar">
            <ButonAgregar/>
          </div>
            </div>
          </div>
          </div>
        ))
      }

      </div>
    </div>
  )
}
