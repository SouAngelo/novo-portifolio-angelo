import React from 'react';
import './style.sass'
import { Link } from 'react-router-dom';

export default function Navigation() {
 

 return (
   <aside>
         <nav className="nav">
          <Link to='/' className="link">Home</Link>
          <Link to='/sobre' className="link">About</Link>
          <Link to='/projetos' className="link">Projects</Link>
         
        </nav>

      
   </aside>
 );
}