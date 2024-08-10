import React, { useEffect, useState } from 'react'
import { DashboardCard } from './components/DashboardCard'
import { DashboardEmpty } from './components/DashboardEmpty'
import { getUserOrder } from '../../services'
export const Dashboard = () => {
  const [orders, setOrders] = useState([]);
useEffect(()=>{

  async function fetchOrders() {
     const data = await getUserOrder();
   
    setOrders(data);
}

fetchOrders();
},[])

  return (
    <main>
    <section>
      <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      {orders.length  && orders.map((order)=> (
        <DashboardCard key={orders.id} order={order}/>
      )) }
      {!orders.length && <DashboardEmpty/> }
    
    </section>
  </main>
  )
}
