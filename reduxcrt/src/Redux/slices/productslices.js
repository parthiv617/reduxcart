import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchproductThunk=createAsyncThunk("products/fetchproductThunk",async()=>{
    const response=await axios.get ('https://dummyjson.com/products')
    localStorage.setItem("products",JSON.stringify(response.data.products))
    return response.data
})



const productSlice=createSlice({
    name:"products",
    initialState:{
        products:[],
        pending:false,
        error:"",
        products2:[],
        currentpage:1
    },
    reducers:{
        filterprod:(state,payload)=>{
            console.log(payload.payload);
            
            state.products=state.products2.filter(item=>item.title.toLowerCase().includes(payload.payload.toLowerCase()))
        },
        nextpage:(state)=>{
            state.currentpage++
        },
        prevpage:(state)=>{
            state.currentpage--
        }


    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproductThunk.pending,(state,payload)=>{
            state.pending=true
            state.products=[]
            state.error=""
        }),
         builder.addCase(fetchproductThunk.fulfilled,(state,payload)=>{
            state.pending=false
            state.products=payload.payload.products
            state.products2=payload.payload.products
            state.error=""

    })
         builder.addCase(fetchproductThunk.rejected,(state,payload)=>{
            state.pending=false
            state.products=[],
            state.error="something went wrong!!"

    })
}
}) 
export default productSlice.reducer
export const{filterprod,prevpage,nextpage}=productSlice.actions
