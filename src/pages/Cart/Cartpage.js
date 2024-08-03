import React from 'react'
import { CartEmpty } from './components/CartEmpty'
import { CartList } from './components/CartList'

export const Cartpage = () => {
  return (
    <main>    
        <CartEmpty/> 
        <CartList/>     
    </main>
  )
}
