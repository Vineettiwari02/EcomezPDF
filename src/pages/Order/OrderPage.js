import React from 'react'
import { OrderSuccsess } from './components/OrderSuccsess';
import { OrderFail } from './components/OrderFail';
import { useLocation } from 'react-router-dom';

export const OrderPage = () => {
      const {state} = useLocation();
  return (
    <main>
        {state.status ? (<OrderSuccsess data={state.data}/>) : (<OrderFail/>) }
        
    </main>
  )
}
