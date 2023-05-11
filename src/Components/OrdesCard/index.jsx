import { XMarkIcon } from '@heroicons/react/24/solid'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
const OrdersCard = props=>{
    const { totalPrice, totalProducts} = props
 
    return(
        <div className="flex justify-between items-center border border-black p-4 w-80 rounded-lg mb-4">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                <span className='font-medium'>0.10.23</span>
                <span  className='font-medium'>{totalProducts} article</span>
                </p>
              <p className='flex items-center gap-2'>
              <span className='font-medium text-2xl'>${totalPrice}</span>
                <ChevronDoubleRightIcon
                className='h-6 w-6 text-black cursor-pointer'/>
              </p>
            
            </div>
        </div>
    )
}

export default OrdersCard