import axios from "axios";
import { URL } from "./constante";

export const filterCategory = async () => {
    const peticion = await axios.get(URL+'products')
    state(peticion.data)
}
