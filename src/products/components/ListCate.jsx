import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListCategorys } from '../data'
import './styles/listCate.css'

export const ListCate = () => {
  const [listaCategrory, setListaCategrory] = useState([]);

  useEffect(() => {
    ListCategorys(setListaCategrory)
  }, [])


  return (
    <div className='container' style={{ marginTop: 0, marginBottom: 20 }}>
      <ul>
        {
          listaCategrory.map(item => (

            <div
              key={item.id}
              className='cardca card '
            >
              <Link to={`/categorias/${item}`} className='links' >
              {item}
              </Link>

            </div>
          ))
        }

      </ul>
    </div>
  )
}


