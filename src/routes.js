import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Home/index'
import Sobre from './Pages/Sobre/index'
import Projetos from './Pages/Projetos/index'
import Contato from './Pages/Contato/index'
import Navigation from './components/navigation';

export default function RoutesApp() {
 return (
   <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path='/' element={<Main/>}/>
       <Route path='/sobre' element={<Sobre/>}/>
       <Route path='/projetos' element={<Projetos/>}/>
       <Route path='/contato' element={<Contato/>}/>
    </Routes>

   </BrowserRouter>
 );
}