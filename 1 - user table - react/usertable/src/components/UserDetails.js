import DeleteAllUser from "./DeleteAllUser ";
import {fakeUserData} from '../api';
import { useDispatch } from "react-redux";
import  {addUser} from '../store/slices/UserSlice'
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch()
  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload))
    }
    
  return (
    <>
          <div className="content">
        <div className="admin-table gap-x-24">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={ () => addNewUser(fakeUserData())}>Add New Users</button>
       
          <DeleteAllUser/> </div>
          <hr />
        <ul>
        <DisplayUsers/>
        </ul>
        <hr />
      
      </div>
    </>
  )
}

export default UserDetails
