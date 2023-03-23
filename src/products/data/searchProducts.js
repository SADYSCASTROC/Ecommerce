import { URL } from './constante'
import axios from 'axios'

export const searchProducts = async (state) => {
    const peticion = await axios.get(URL+'products/search?q=')
    state(peticion.data)
}
