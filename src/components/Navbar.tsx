import React from 'react'
import { Link } from 'react-router-dom';


const links = [
  {
    href: "/guide",
    title: "Guide",

  },
  {
    href: "/pricing",
    title: "Pricing",

  },
  {
    href: "/login",
    title: "Login",
  }
]

const Navbar = () => {
  return (  
    <div className="flex items-center justify-between py-4 px-4">
        <Link to="/">
        <img src="/finta-logo-light.svg"
        draggable={false} 
        loading="lazy"
        height={100}
        width={100}
        alt="logo"
        />
        </Link>
        <div className="flex items-center gap-4">
       {
  links.map((link, index) => {
    return (
      <Link to={link.href} key={index}
      className="text-black font-medium cursor-pointer hover:text-neutral-500 transition duration-200 ">
        {link.title}
      </Link>

    );
  })
}

<button className='bg-[#2579f4] px-4 py-2 rounded-lg text-white shadow-lg text-shadow-md tracking-wide '>Start Free trial </button>
</div>
        </div>
  )
}

export default Navbar