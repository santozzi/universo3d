import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ItemListContainer } from '../components/itemListContainer/itemListContainer';
import { ItemDetailContainer } from '../components/itemDetailContainer/itemDetailContainer';
import { Cart } from '../components/cart/cart';
import { ErrorPage } from '../components/errorPage/errorPage';
import { DashboardContainer } from '../components/admin/dashboardContainer';
import { ProtectedRoutes } from './protectedRoutes';
import { OrderContainer } from '../components/cart/orderContainer/orderContainer';
export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/universo3d' element={<ItemListContainer />} />
      <Route path='/category/:id' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/orders/:id' element={<OrderContainer />} />

      <Route path='/cart' element={<Cart />} />
      <Route path='/admin' element={
        <ProtectedRoutes>
          <DashboardContainer />
        </ProtectedRoutes>
      } />
      <Route path='/admin/:id' element={
        <ProtectedRoutes>
          <DashboardContainer />
        </ProtectedRoutes>
      } />



      <Route path='/error/:mensaje' element={<ErrorPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}
