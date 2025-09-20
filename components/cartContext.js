import { createContext, useContext, useEffect, useState } from 'react'
const CartContext = createContext(null)
export function CartProvider({children}){
  const [cart,setCart]=useState([])
  useEffect(()=> {
    try {
      const raw = localStorage.getItem('z_cart')
      if(raw) setCart(JSON.parse(raw))
    } catch(e){}
  },[])
  useEffect(()=> {
    try{ localStorage.setItem('z_cart', JSON.stringify(cart)) }catch(e){}
  },[cart])
  const addToCart = (p) => setCart(prev=>[...prev,p])
  const removeFromCart = (idx) => setCart(prev=> prev.filter((_,i)=> i!==idx))
  const clearCart = ()=> setCart([])
  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>{children}</CartContext.Provider>
}
export const useCart = ()=> useContext(CartContext)
