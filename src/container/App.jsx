import React from "react";
import '../styles/App.css'
import Freezer from '../pages/Freezers';
import Login from "../pages/Login";
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  return (
 
    <BrowserRouter>
<Routes>
 <Route path="/" element={<Login />} />
 <Route path="/Control-Panel" element={<Freezer />} />
</Routes>
</BrowserRouter> 

  );
}

export default App;
