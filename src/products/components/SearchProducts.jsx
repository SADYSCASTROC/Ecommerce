import { useState } from "react";
import { URL } from "../data/constante";
import { Link } from "react-router-dom";
import { ButonAgregar } from "./ButonAgregar";
export const SearchProducts = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);


    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            fetch(URL + 'products/search?q=' + query)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setResults(data.products);
                });
        }
    }
    

    return (

        <div className="searchProducts">
          <div className="containerInputSearch">
          <input
                className='buscador'
                type="text"
                placeholder="Buscar productos"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            {/* <ListaSearch resultado={results} /> */}

          </div>

          <div className="containerProductsMainSearc">


          <div className="containerProductosMain">

{
  results.map(desc => (
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

          </div>

        </div>
        // <input type="text" placeholder='Buscar productos' name="" id="" className='buscador' />
    )
}
