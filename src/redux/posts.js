import React from 'react'

import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts=createAsyncThunk("posts/getPosts",async(thunkApi)=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()
    return data
    // .then(data=>data.json())
    // return res
})

export const postSlice=createSlice({
    name:"posts",
    initialState:{posts:[]},
    reducers:{},
    extraReducers:{
        [getPosts.fulfilled]:(state,{payload})=>{
            state.posts=payload
        }
    }
})

export default postSlice.reducer