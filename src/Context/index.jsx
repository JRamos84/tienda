import { createContext, useState, useEffect } from "react"

export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({children})=>{
    // Shopping card increment quantity
    const [count, setCount] = useState(0)

    // Product detail open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=> setIsProductDetailOpen(false)

    // ckeckout Side menu open/close
    const [ischeckoutSideMenuOpen, setIscheckoutSideMenuOpen] = useState(false)
    const opencheckoutSideMenu = ()=> setIscheckoutSideMenuOpen(true)
    const closecheckoutSideMenu = ()=> setIscheckoutSideMenuOpen(false)

    // Product Detail - show product
    const [productToShow, setProductToShow]= useState({})
    // Shopping carts Add products to cart
    const [cartProducts, setCartProducts]= useState([])

    // Shopping Cart - Order
    const [order, setOrder]= useState([])

    // Get Product

    const [items, setItems] = useState(null)

    const [filterItems, setFilterItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
   
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
    
        
      },[])
   

      const filteredItemsByTitle = (items,searchByTitle)=>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())) }

    useEffect(()=>{ 
        if(searchByTitle)setFilterItems( filteredItemsByTitle(items,searchByTitle))
    },[items,searchByTitle])



    return(
        <ShoppingCardContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                opencheckoutSideMenu,
                closecheckoutSideMenu,
                ischeckoutSideMenuOpen,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filterItems,
                setFilterItems
            }
            }>
          {children}
        </ShoppingCardContext.Provider>
  
    )

}