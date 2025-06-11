import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BeatLoader } from 'react-spinners';

export default function ProductDetails() {


    // const [Product,SetProduct]=useState(null);
    // const [counter,setCounter]=useState(1);

    let {id}=useParams();


     function getProductByID(id){
      return  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     }

     let{data,isLoading}=useQuery({
      queryKey:['productDetails'],
      queryFn:()=>getProductByID(id)
     })
    
      console.log(data?.data?.meals[0]);
      
  if(isLoading){
    return <div className='py-8 flex justify-center w-full'>
        <BeatLoader  color='green'/>
    </div>
  }
  
  return <>
      <div className='container text-black lg:flex items-start font-cursive'>
        <div className='lg:w-2/3'>
           <h1 className='text-5xl font-semibold '>{data?.data?.meals[0]?.strMeal}</h1>
            <div className='lg:flex justify-between'>
               <div className='lg:w-1/2 p-1 text-center'>
                 <img src={data?.data?.meals[0]?.strMealThumb} alt=""  className='w-full rounded-xl mb-8'/>
                  <div className="flex w-full flex-wrap justify-around">
                    <button className='text-white px-6  bg-red-600 py-2'>youtube</button>
                    <button className='text-white px-6 bg-green-500 py-2'>source</button>
                  </div>
               </div>
               <p className='lg:w-1/2 p-2'>{data?.data?.meals[0]?.strInstructions}</p>
            </div>
        </div>
        <div className="ingredients lg:w-1/3 bg-white rounded-lg p-4 m-4">
         <h2 className='text-3xl font-bold border-b-4 pb-3 border-gray-300 mb-5'>Ingredients</h2>
         {
          Array.from({length:20},(_,i)=>{
            const ingredient = data?.data?.meals[0]?.[`strIngredient${i + 1}`];
            const measure = data?.data?.meals[0]?.[`strMeasure${i + 1}`];
        
           if(ingredient){
            return( <div className={ data?.data?.meals[0]?.[`strIngredient${i + 2}`]?'flex justify-between my-3  border-b-2 pb-2 border-gray-300':null}>
              <span>{ingredient}</span>
              <span>{measure}</span>
            </div>
           );
           }
          })
         }
        </div>
      </div>
  </>
}
