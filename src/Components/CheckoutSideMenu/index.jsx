import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCardContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../utils'
import './styles.css'
import OrderCard from '../OrderCard'


const CheckoutSideMenu  = ()=>{
    const context = useContext(ShoppingCardContext)

    const handleDelete = (id)=>{
        const filteredProducts = context.cartProducts.filter(product=> product.id !== id)
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout = ()=>{
        const orderToAdd = {
            data:'01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

    return(
        <aside className={`${context.ischeckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div  ><XMarkIcon
                 className="h-6 w-6 text-black cursor-pointer" 
                 onClick={()=> context.closecheckoutSideMenu()}
                 /></div>

            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map( product =>(
                    <OrderCard
                    key = {product.id}
                     title = {product.title}
                     id = {product.id}
                     imageUrl = {product.images}
                     price = {product.price}
                     handleDelete = {handleDelete}
                     />
                ))
            }
            </div>
            <div className='px-6 mb-6 '>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-order/last'>
                <button 
                className='w-full bg-black py-3 text-white rounded-lg'
                onClick={()=> handleCheckout()}>Ckeckout</button>
                </Link>
           

            </div>
   
        </aside>
    )

}

export default  CheckoutSideMenu 