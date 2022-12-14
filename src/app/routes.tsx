import React from "react"
import Admin from "../pages/admin/Admin";
import {Auth2} from "../pages/auth/Auth2";
import {Route, Routes} from "react-router";
import Lk from "../pages/lk/Lk";
import Main from "../pages/main/Main";
import MyOrders from "../pages/lk/MyOrders/MyOrders";
import Basket from "../pages/lk/Basket/Basket";
import Brands from "../pages/admin/components/Brands/Brands";
import Drinks from "../pages/admin/components/Drinks/Drinks";
import CreateDrink from "../pages/admin/components/Drinks/CreateDrink";
import {Reports} from "../pages/admin/components/Reports/Reports";
import Orders from "../pages/admin/components/Orders/Orders";

const MyRoutes = () => {
  return (
      <Routes>
          <Route element={<Main />} path='/' />
          <Route element={<Auth2 />} path='/auth' />
          <Route element={<Admin/>} path='admin'>
              <Route element={<Brands />} index />
              <Route element={<Drinks />} path='projections' />
              <Route element={<Orders />} path='orders' />
              <Route element={<Reports />} path='reports' />
              <Route element={<CreateDrink />} path='createDrink' />
          </Route>
          <Route
              element={<Lk/>} path='lk'>
              <Route element={<MyOrders />} path='orders' />
              <Route element={<Basket />} index />
          </Route>
      </Routes>
  )
}

export default MyRoutes;