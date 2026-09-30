import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
      <nav className="flex flex-row content-start gap-10 bg-[#212529] p-5 text-xl items-center borderd text-white">
        <Link to="/"><div className=""><img className="w-12" src="src\assets\logo.png"></img></div></Link>
        <Link to="/Relleno"><div className=''>Relleno</div></Link>
        <div className=''>Informacion</div>
      </nav>
  )

};
export default Nav;




//      <Link to="/">Inicio</Link>
//      <Link to="/productos">Productos</Link>
//      <Link to="/contacto">Contacto</Link>
