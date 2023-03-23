import logo from '../../assets/Logo.png'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <ContenedorLogo>
        <img src={logo} alt=" Logo" className='logo' />
    </ContenedorLogo>
  )
}

const ContenedorLogo = styled.div`
height: 30px;
width: 100px;

`