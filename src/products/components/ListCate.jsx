import React, { useEffect, useState } from 'react'
import { ListCategorys } from '../data'

export const ListCate = () => {
  const [listaCategrory, setListaCategrory] = useState([]);
  console.log(listaCategrory)

  useEffect(() => {
    ListCategorys(setListaCategrory)
  }, [])


  return (
    <div className='container' style={{ marginTop: 100, marginBottom: 20 }}>
      <ul>
        {
          listaCategrory.map(item => (
            <div
              key={item.id}
              className=''
            >
              {item}
            </div>
          ))
        }

      </ul>
    </div>
  )
}
