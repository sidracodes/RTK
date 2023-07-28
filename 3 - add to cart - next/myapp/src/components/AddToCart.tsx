'use client'
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice"

const AddToCart = () => {
    const dispatch = useDispatch()
    const addItemsToCart = () =>{
        dispatch(cartActions.addToCart({quantity:1}))
    }
  return (
    <>
         
     
         <Button onClick={addItemsToCart}>Add to Cart</Button> 
    </>
  ) 
}

export default AddToCart
