import { useState } from "react"
import styled from "styled-components"
import { ModalCategory } from "../../products/components/ModalCategory"
import { ListCate } from "../../products/components/ListCate"

export const ButonCategory = () => {

    const [estadoModal, setEstadoModal] = useState(false)

    return (
        <div>
            <Buton onClick={()=> setEstadoModal(!estadoModal )}>
                Categorias
            </Buton>

            <ModalCategory 
            estado={estadoModal}
            cambiarEstado = {setEstadoModal}
            >
            <ListCate/>
            </ModalCategory>
        </div>
    )
}

const Buton = styled.button`
border: none;
background-color:  #212F3D;
transsition: .3s ease all;
color:#808B96;
`
