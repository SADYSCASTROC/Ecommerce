import logo from '../../assets/Logo.png'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <ContenedorLogo>
        <img src={logo} alt="" />
    </ContenedorLogo>
  )
}

const ContenedorLogo = styled.div`
height: 30px;
width: 30px;
`