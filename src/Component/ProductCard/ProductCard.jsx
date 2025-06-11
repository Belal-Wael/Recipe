import { Link } from "react-router-dom";

export default function ProductCard(props) {
 
   console.log(props);
   
   
    let {idMeal,strArea: _strArea,strMeal,strMealThumb}=props.product;

  return <>
     <div className='bg-white flex flex-col items-center p-12 pb-4 rounded-3xl mb-10 group  hover:scale-105 hover:shadow-xl  duration-700 transition-all text-center'>    
        <img src={strMealThumb}  alt="photo of meal" className="w-full -translate-y-20 rounded-full group-hover:rotate-[360deg] duration-700 transition-all drop-shadow-xl shadow-2xl"/>
        <h2 className="font-semibold -mt-12  font-Pacifico tracking-wider	 text-xl text-black">{strMeal.split(' ').slice(0,2).join(' ')}</h2>
         <div className="flex justify-center items-center text-green-500 mb-5">
            <i className="fa-solid fa-earth-americas pe-2 text-xl font-bold"></i>
            <span className="text-xl font-bold">{_strArea}</span>
         </div>
        <Link className="bg-green-500 text-white rounded-full font-bold py-2 px-8" to={`/ProductDetails/${idMeal}`}>View Recipe</Link>
     </div>
  </>
}
