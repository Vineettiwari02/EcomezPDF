import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage,Login,ProductDetail,ProductList, Register } from '../pages'
export const Allroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="products" element={<ProductList/>}/>
                <Route path="products/:id" element={<ProductDetail/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </>
    )
}
