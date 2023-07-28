import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
name: 'users',
initialState: [],
reducers: {
    addUser(state,action){
state.push(action.payload)
console.log(action.payload)
    },
    removeUser(state,action){

    },
    deleteUsers(state,action){

    }
}

})
export default userSlice;
export const {addUser} = userSlice.actions;