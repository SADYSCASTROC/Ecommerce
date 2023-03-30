import styled from "styled-components"

export const ModalCategory = ({ children, estado, cambiarEstado }) => {
    return (
        <>
            {estado &&
                <Overlay onClick={()=> cambiarEstado(false)}> 
                    <ContenedorModal>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    )
}

const Overlay = styled.div`

width: 100vw;
height: 100vh;
position: fixed;
top:78px;
left:0;
background: rgba(0,0,0,.5);
z-index: 1px;

`;

const ContenedorModal = styled.div`

width: 350px;
height: 100vh;
background: #fff;
Position: relative;
padding: 15px;
color:rgba(0,0,0,.5);
margin-top: 0px;
`;


