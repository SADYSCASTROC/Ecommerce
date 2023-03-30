import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ListCategorys } from '../data'

export const ListCate = () => {
  const [listaCategrory, setListaCategrory] = useState([]);

  useEffect(() => {
    ListCategorys(setListaCategrory)
  }, [])


  return (
    <div className='container containerCategoryLinks'>
      <ul>
        {
          listaCategrory.map(item => (

            <div
              key={item.id}
              className='cardca card  '
            >
              <Link to={`/categorias/${item}`} className='linksCategory' >
              {item}
              </Link>

            </div>
          ))
        }

      </ul>
    </div>
  )
}


