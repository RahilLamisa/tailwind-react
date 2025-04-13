import React, { useState } from 'react';
import Link from './Link';
import { AlignLeft, X } from 'lucide-react';

const navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  const links = navigation.map(route => <Link key={route.id} route={route}></Link>)
  

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className='flex justify-between items-center mx-8'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden'></X> : <AlignLeft className='md:hidden'></AlignLeft>
                }
                <ul className={`md:hidden absolute bg-amber-300 ${open ? 'top-8' : '-top-50'} duration-1000`}>
                    { links }
                </ul>
            
            <h3 className='ml-2'>My navbar</h3>
            </span>
            <ul className=' md:flex hidden'>
                {
                    links
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navigation.map(route => 
                    <li className='mr-3'><a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}
            {/* <ul className='flex'>
                <li className='mr-3'><a href="/home">home</a></li>
                <li className='mr-3'><a href="/about">about</a></li>
                <li className='mr-3'><a href="/contact">contact</a></li>
            </ul> */}
            <button className='btn'>Login</button>
        </nav>
    );
};

export default Navbar;