import { useSelector} from 'react-redux'
import { RootState } from './store'

const DisplayValue = () => {
    
  const counterValue = useSelector((state: RootState)=>state.counter.value);
  return (
    <>
      <input type="text" name="quantity" className="quantity__input" value={counterValue}/>
      
   </>
  )
}

export default DisplayValue
