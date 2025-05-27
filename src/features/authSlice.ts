import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface User{
    email:string,
    name:string,
    role:'admin'|'user'|'reviewer'
}

interface AuthState{
    user:User|null
}

const initialState:AuthState={
    user:null,
};
const authSlice = createSlice({
   
    name:'auth',
    initialState,
    reducers:{
      setUser(state,action:PayloadAction<User>){
      state.user = action.payload
      },
      removeUser(state){
      state.user = null
      }
    }
})

export const {setUser,removeUser} = authSlice.actions
export default authSlice.reducer