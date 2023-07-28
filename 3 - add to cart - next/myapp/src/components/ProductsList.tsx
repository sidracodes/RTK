"use client"
import ProductCard from "./ProductCard"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { data }from "../views/data"

const ProductsList = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <section className="my-28">
   
    <h3 className="flex text-blue-700 font-bold  justify-center">PRODUCTS</h3>
    <h1 className="flex text-4xl font-semibold my-10 justify-center">Check What We Have</h1>

<Carousel responsive={responsive}>
{
  data.map((currentElement,currentIndex)=>{
    return(
      <ProductCard 
      key={currentIndex} 
      id={currentElement.id}
      image= {currentElement.image}
      title={currentElement.title}
      price={currentElement.price} 
      category={currentElement.category}
      />

    )
   
  })
}
</Carousel>
</section>
  </>
  )
}

export default ProductsList
