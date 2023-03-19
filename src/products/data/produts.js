import axios from 'axios';

export const products = async (state) => {
    const peticion = await axios.get('https://dummyjson.com/products')
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


