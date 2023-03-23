import { useState } from "react"
import styled from "styled-components"
import { ModalCategory } from "../../products/components/ModalCategory"
import { ListCate } from "../../products/components/ListCate"
import menu from '../../assets/menuh.png'
import '../components/style/navbar.css'

export const ButonCategory = () => {

    const [estadoModal, setEstadoModal] = useState(false)

    return (
        <div>
            <button onClick={()=> setEstadoModal(!estadoModal )} className="buton">
                <img src={menu} alt=""className="menuImg" />
            </button>

            <ModalCategory 
            estado={estadoModal}
            cambiarEstado = {setEstadoModal}
            >
            <ListCate/>
            </ModalCategory>
        </div>
    )
}


