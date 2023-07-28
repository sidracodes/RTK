import Image from 'next/image';
import {data} from '../../../../views/data';

const getProductDetails=(id: number)=>{
return data.filter((currentElement)=>{
        return  currentElement.id == id ; 
      })      

}

export default function Page({ params }: { params: { id: number } }){
    const result = getProductDetails(params.id)
return (
  
   <div className=' mt-16 py-10'>
   
  {
  result.map((currentElement,currentIndex)=>{
return(
    <div key={currentIndex} className='flex justify-evenly flex-wrap'>
        <Image src={currentElement.image} alt="productimage" width={325} height={400}/>
        <h1 >{currentElement.title}</h1>
        </div>
  
)

  }



  )
  }
    </div>
)
}