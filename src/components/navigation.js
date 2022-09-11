import React from 'react';
import './style.sass'
import { Link } from 'react-router-dom';

export default function Navigation() {
 return (
   <aside>
         <nav class="nav">
          <Link to='/' class="link">Home</Link>
          <Link to='/sobre' class="link">About</Link>
          <Link to='/projetos' class="link">Projects</Link>
         
        </nav>

      
   </aside>
 );
}