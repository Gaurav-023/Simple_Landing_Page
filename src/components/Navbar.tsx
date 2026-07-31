import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (  
    <div className="flex items-center justify-between py-1 px-1">
        <Link to="/">
        <img src="/finta-logo-light.svg"
        draggable={false} 
        loading="lazy"
        height={100}
        width={100}
        alt="logo"
        />
        </Link>
        Navbar</div>
  )
}

export default Navbar