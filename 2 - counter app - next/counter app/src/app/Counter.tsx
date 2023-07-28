'use client'
import { useDispatch } from 'react-redux'
import { counterActions} from './store/slice/counterSlice'
import DisplayValue from './DisplayValue';
import {AppDispatch }from './store'



const Counter = () => {

  const dispatch:AppDispatch = useDispatch();
  const incrementNumber=()=>{
dispatch(counterActions.increment())
  }
  const decrementNumber=()=>{
  dispatch(counterActions.decrement())
  }
  const incrementByNumber=()=>{
  dispatch(counterActions.incrementByAmount(5))
  }
  const decrementByNumber=()=>{
  dispatch(counterActions.decrementByAmount(5))
  }
  return (
    <>
 <div className="container">
  <p>Counter Application</p>
      <div className="quantity">
      <button onClick={decrementByNumber} className="quantity__plus" title="decrement by number"><span> Decrement By 5 </span></button>

        <button onClick={incrementNumber}   className="quantity__minus" title="Decrement"><span> Increment </span></button>
        <DisplayValue/>
        <button onClick={decrementNumber} className="quantity__plus" title="Increment"><span> Decrement </span></button>
        <button onClick={incrementByNumber} className="quantity__plus" title="Increment by number"><span> Increment By 5 </span></button>

      </div>
    </div>
    </>
  )
}

export default Counter
