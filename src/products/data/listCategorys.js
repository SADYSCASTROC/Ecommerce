import axios from "axios"

export const ListCategorys = async (state) => {

    const peticion = await axios.get('https://dummyjson.com/products/categories')
    state(peticion.data)

}
