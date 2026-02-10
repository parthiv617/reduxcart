import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addtowishlist:(state,action)=>{
            const existingItem = state.find(item => item.id === action.payload.id);
            if(existingItem){
                alert("product already in wishlist")
            }
            else{
                state.push(action.payload)
            }
           
        },
        removefromwish:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }
})
export default wishlistSlice.reducer
export const{addtowishlist,removefromwish}=wishlistSlice.actions