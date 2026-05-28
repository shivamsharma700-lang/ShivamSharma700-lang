import { configureStore, createSlice } from '@reduxjs/toolkit';
const authSlice=createSlice({name:'auth',initialState:{user:JSON.parse(localStorage.getItem('vocal_user')||'null')},reducers:{setAuth:(s,a)=>{s.user=a.payload.user;localStorage.setItem('vocal_access',a.payload.accessToken);localStorage.setItem('vocal_user',JSON.stringify(a.payload.user));},logout:(s)=>{s.user=null;localStorage.clear();}}});
const cartSlice=createSlice({name:'cart',initialState:{items:[]},reducers:{setCart:(s,a)=>{s.items=a.payload},clearCart:(s)=>{s.items=[]}}});
export const {setAuth,logout}=authSlice.actions; export const {setCart,clearCart}=cartSlice.actions;
export const store=configureStore({reducer:{auth:authSlice.reducer,cart:cartSlice.reducer}});
