import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtocart:(state,payload)=>{
            if(state.find(item=>item.id==payload.payload.id)){
             const prod=state.find(item=>item.id==payload.payload.id)
             prod.quantity+=1
            }
            else{ state.push({...payload.payload,quantity:1})
        }
           
        },
        removeFromcart:(state,payload)=>{
          return  state=state.filter(item=>item.id!=payload.payload)
        },
        checkout:(state)=>{
            return state=[]
        },
            increment: (state, action) => {
      const product = state.find(
        item => item.id == action.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const product = state.find(
        item => item.id == action.payload
      );

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          return state.filter(
            item => item.id != action.payload
          );
        }
      }
    }
  

    }
})
export default cartSlice.reducer
export const{addtocart,removeFromcart,checkout,increment,decrement}=cartSlice.actions