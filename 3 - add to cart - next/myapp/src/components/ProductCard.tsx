
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"
import AddToCart from "./AddToCart"

type Product ={
  id: number,
  image: string | StaticImageData,
  title:string,
  price: string,
  category: string
}
const ProductCard : FC<Product>= ({image,title,price,category,id}) => {
  console.log(category)
  return (
    <>
        <div className="py-6"> 
          
          <Link href={`product/${id}`}>
          <Image src={image} alt="p1" width={325} height={400}/>
          </Link>
     <h1 className="text-lg font-semibold tracking-wide mt-5">{title}</h1>
     <h1 className="text-2xl font-semibold">{price}</h1>
     <p className=" font-semibold mt-4">Product Id:
     <span className="text-base font-normal">  {id}</span></p>
     <p className="font-semibold mb-4">Category: 
     <span className="text-base font-normal">  {category}</span></p>
   
 <AddToCart/>
     
    </div> 
    </>

  )
}

export default ProductCard
