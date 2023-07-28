import {  useSelector } from "react-redux"
const DisplayUsers = () => {
    const data = useSelector((state)=>{
        return state.users
    })
    console.log(data)
  return (
    <>
    {
        data.map((user,id)=>{
            return (
              <>
          <div className="d">

              <li key={id}>{user} <button className='del-btn d'>  Remove </button> </li>
              
         </div>
          </>
            
            
            )
        })
    }
    </>
  )
}

export default DisplayUsers
