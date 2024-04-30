import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Home from '../Pages/Home/Home';
import Buy from '../Pages/Buy/Buy';
import Rent from '../Pages/Rent/Rent';


const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route element ={<Layout />}>
                <Route path ="/" element={<Home />} />
                <Route path ="/buy" element={<Buy />} />
                <Route path ="/rent" element={<Rent />} />

            </Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router
