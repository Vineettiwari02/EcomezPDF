import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cartpage, Dashboard, Homepage,Login,OrderPage,ProductDetail,ProductList, Register } from '../pages';
import { ProtectedRoute } from './ProtectedRoute';
export const Allroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="products" element={<ProductList/>}/>
                <Route path="products/:id" element={<ProductDetail/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>

                <Route path="cart" element={<ProtectedRoute><Cartpage/></ProtectedRoute>}/>
                <Route path="order-summary" element={<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
                <Route path="dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            </Routes>
        </>
    )
}
