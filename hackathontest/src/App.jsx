import React from 'react'
import Index from './compudents'
import Login from './compudents/login/login'
import {Routes,Route} from "react-router-dom"
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}>
        
        </Route>
        <Route path="/products" element={<Index></Index>}></Route>
      </Routes>
      
    </>
  );
}
