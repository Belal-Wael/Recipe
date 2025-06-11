import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


export default function Home() {


  let [products,setProducts]=useState([]);

  let {category}= useParams();

   async function getData(catName){
    const categoryToUse = catName || 'All'; 
      if(categoryToUse !=='All'){
        await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
        .then(({data})=>{
          setProducts(data.meals)
        })
        console.log(categoryToUse);
        
      }
      else{
        await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(({data})=>{
          setProducts(data.meals)
        })
        console.log(categoryToUse);
      }
   }

  useEffect(()=>{
    getData(category);
  },[category])

 

  return <>
  
    <Navbar/>
    <div className="mt-24 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {
        products.map((item)=><ProductCard product={item}  key={item.idMeal}/>)
      }
    </div>
  </>
}
