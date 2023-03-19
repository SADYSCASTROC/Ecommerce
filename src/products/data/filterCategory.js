import axios from "axios";

export const filterCategory = async () => {
    const peticion = await axios.get('https://dummyjson.com/products')
    state(peticion.data)

}
