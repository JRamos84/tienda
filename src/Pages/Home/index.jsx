import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCardContext } from "../../Context"
import { capitalizarPrimeraLetra } from "../../utils"
function Home() {
  

  const context = useContext(ShoppingCardContext)
  const currentPath = window.location.pathname
  let index = capitalizarPrimeraLetra(currentPath.substring(currentPath.lastIndexOf('/')+1))
  const renderView = ()=>{

    if(context.searchByTitle?.length > 0){
      if(context.filterItems?.length > 0){
        if(index){
          return (
            context.filterItems?.filter(item => item.category.name === index).map((item)=>(
              <Card key={item.id} data = {item}/>
           ))
          )
        }else{
      return (
          context.items?.map((item)=>(
            <Card key={item.id} data = {item}/>
         ))
        )}}else{
          return(
            <div>We don't have anything</div>
          )
        }
      
    }else{
   
      if(index){
        return (
          context.filterItems?.filter(item => item.category.name === index).map((item)=>(
            <Card key={item.id} data = {item}/>
         ))
        )
      }else{
  
    return (
        context.items?.map((item)=>(
          <Card key={item.id} data = {item}/>
       ))
      )}
    }
  }

  return (
    <Layout>
       <div className='flex justify-center items-center relative w-80 mb-6'>
          <h1 className="font-medium text-xl"> Exclusive Products </h1>
        </div>
        <input 
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
         type="text" 
         placeholder="Search a product" 
         onChange={(event)=> context.setSearchByTitle(event.target.value)}
         />

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {renderView()}
      </div>
      <ProductDetail/>
   
    </Layout>
  )
}

export default Home
