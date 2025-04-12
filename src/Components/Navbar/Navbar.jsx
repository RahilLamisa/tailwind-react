import React from 'react';
import Link from './Link';

const navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  

const Navbar = () => {
    return (
        <nav>

            <ul className='flex justify-center'>
                {
                    navigation.map(route => <Link key={route.id} route={route}></Link>)
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
        </nav>
    );
};

export default Navbar;