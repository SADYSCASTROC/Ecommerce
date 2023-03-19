import { useEffect, useState } from "react"
import { products } from "../data"
import imgAvalable from '../../assets/avalaible.png';
import './styles/cardPro.css'
import carrito from '../../assets/carrito.png'
export const CardPro = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    products(setProducts)
  }, [])


  return (
    <>

      {
        product.map(desc => (
          <div key={desc.id} className="col-3 p-5 ">
          <div 
            className="card  m-2 cardP"
          >
            <div className="imgProduc">
              <img className="card-img-top "
                src={desc.images.length > 0 ? desc.images[0] : imgAvalable} />

            </div>

            
              <div className="card-body">
                <p className="card-text descuento "> <br />
                  {desc.discountPercentage % 1 !== 0 ? Math.trunc(desc.discountPercentage) : desc.discountPercentage} % <br /> DTO
                </p>
                <h6 className="card-title">{desc.title}</h6>
                <del  className="ahoraANtes"> Antes $ {((desc.price/(100-desc.discountPercentage))*100).toFixed(2)}</del>
                <p className="ahoraANtes">Ahora ${desc.price}</p>

                <div className="contCarrito w-100">
                  Agregar <span><img src={carrito} alt="carrito"  className="carrito"/></span>
                </div>
              
            </div>
          </div>
          
          </div>

        ))
      }

    </>
  )
}
