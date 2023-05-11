import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ShoppingCardContext } from "../../Context"
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import OrderCard from '../../Components/OrderCard'
import Layout from "../../Components/Layout"
function MyOrder() {
  const context = useContext(ShoppingCardContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if(index === 'last') index = context.order?.length - 1
 
    return (
   <Layout>
        <div className='flex justify-center items-center relative w-80 mb-6'>
          <h1 className="font-medium text-xl"> My order </h1>
          <Link to='/my-orders' className='absolute left-0' >
            <ChevronDoubleLeftIcon
                className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
        </div>
      <div className='flex flex-col w-80'>
            {
                context.order?.[index]?.products.map( product =>(
                    <OrderCard
                    key = {product.id}
                     title = {product.title}
                     id = {product.id}
                     imageUrl = {product.images}
                     price = {product.price}
                   
                     />
                ))
            }
            </div>
   </Layout>
    )
  }
  
  export default MyOrder
  