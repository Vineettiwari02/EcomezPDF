import React from 'react'
import { OrderSuccsess } from './components/OrderSuccsess';
import { OrderFail } from './components/OrderFail';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

export const OrderPage = () => {
      const {state} = useLocation();
      useTitle("Order Summary");
  return (
    <main>
        {state.status ? (<OrderSuccsess data={state.data}/>) : (<OrderFail/>) }
        
    </main>
  )
}
