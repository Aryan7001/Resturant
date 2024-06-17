import { createContext, useEffect, useState } from "react";
import axios from 'axios'
console.log(axios)


export const StoreContext = createContext();

const API_KEY = '95383168f8ca41a1831f0fafd703df58'
const URL = 'https://api.spoonacular.com/recipes/random'

const StoreContextProvider=(props)=>{

const[addItems, setAddItems] = useState({})

const addFunction = (itemid)=> {

if(!addItems[itemid]){
setAddItems((prev)=>({...prev,[itemid]:1}));
}

else{
setAddItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
}

}

const removeFunction = (itemid)=>{
setAddItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))

}


const[products,setProducts]= useState([])
console.log('xa vai', products)
const[loading,setLoading] = useState(true)


const getProducts = async()=>{

try{

const res = await axios.get(URL,{
params:{
    apiKey: API_KEY,
    number:30
}


})
setProducts(res.data.recipes)
setLoading(false)


}

catch(error){
    console.log('error xa vai', error);
    setLoading(false)
}


}

useEffect(()=>{

    getProducts()


},[])


const value={
products,
loading,
removeFunction,
addFunction,
addItems,
setAddItems
}


return(

<StoreContext.Provider value={value}>
{props.children}
</StoreContext.Provider>


)



}

export default StoreContextProvider;