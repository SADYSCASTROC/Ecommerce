import { URL } from './constante'
import axios from 'axios'

export const searchProducts = async (state, valueInput) => {
    const peticion = await axios.get(URL+'products/search?q='+valueInput)
    state(peticion.data)
}
