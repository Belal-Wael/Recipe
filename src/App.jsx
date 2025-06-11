import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  
  

  let query=new QueryClient();
  
  let router=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'Home/:category',element:<Home/>},
      {path:'ProductDetails/:id',element:<ProductDetails/>},
    ]}
  ])

  return (
    <>
    <QueryClientProvider client={query}>

      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
