import axios from "axios";
import { URL } from "./constante";

export const categoryProductsFilter = async (nameCategory,state ) => {

    
        const peticion = await axios.get(URL+'products/category/'+nameCategory)
        let pro = peticion.data.products;
      
        pro.map( it =>{ 
            it
         })
     

        state(pro)


}

