import axios from 'axios';
import { URL } from './constante';
export const products = async (state) => {
    const peticion = await axios.get(URL+'products')
     let pro = peticion.data.products;
    let proArr = [];
    let arrayRandow = [];

    pro.map( item =>{ proArr.push(item) })
    proArr.sort(function() {return Math.random() - 0.5});


    for(let m =0; m<proArr.length; m++){
        if(m<10){
            if(proArr[m].discountPercentage>0)
            arrayRandow.push(proArr[m]);
        }
    };    
    state(arrayRandow)
}

export const unicoProduct = async (id,state) =>{
    const peticion = await axios.get(URL+'products/' + id)
    state(peticion.data)

}


