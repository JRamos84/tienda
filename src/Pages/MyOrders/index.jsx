import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCardContext } from "../../Context"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdesCard"
function MyOrders() {
  const context = useContext(ShoppingCardContext)
    return (
<Layout>
  <div className='flex justify-center items-center relative w-80 mb-4 '>

    <h1 className="font-medium text-xl"> My orders </h1>

  </div>
 
  { context.order.map((order,index)=>(
    <Link key={index} to={`/my-order/${index}`}>
            <OrdersCard 
      totalPrice ={order.totalPrice} 
      totalProducts={order.totalProducts}/>
    </Link>

  ))}

</Layout>
    )
  }
  
  export default MyOrders
  