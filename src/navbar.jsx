import React, { useState } from 'react';
import './navbar.css';
import { NavItem } from './navItem.jsx';

const multimedia = [
    { 
        id: 1, 

        category: { name: "Peliculas", url: "peliculas"},

        items:[
            {name :"terror", url: "t"},
            {name :"suspenso", url: "s"},
            {name :"accion", url: "a"}
        ] 
    },
    { 
        id: 2, 

        category: { name: "Peliculas", url: "peliculas"},

        items:[
            {name :"terror", url: "t"},
            {name :"suspenso", url: "s"},
            {name :"accion", url: "a"}
        ] 
    },
    { 
        id: 3, 

        category: { name: "Peliculas", url: "peliculas"},

        items:[
            {name :"terror", url: "t"},
            {name :"suspenso", url: "s"},
            {name :"accion", url: "a"}
        ] 
    }
];

export function Navbar() {

    const [itemList, setItemList] = useState(false)

    const toggleItemList = () => {
        setItemList(!itemList)
    }

    return (
        <nav className='nav'>
            <nav className='nav-top'>
                <img className='nav-jordan-logo' src="https://cdn.worldvectorlogo.com/logos/jordan-2.svg" alt="" />
                <div className='nav-text font-short'>
                    <p>Buscar Tienda</p>
                    <div className='nav-text-line'></div>
                    <p>Ayuda</p>
                </div>
            </nav>
            <nav className='nav-bottom'>
                <img className='nav-logo' src="https://cdn.worldvectorlogo.com/logos/nike-11.svg" alt="" />

                <div className='nav-links font-medium'>
                    <NavItem text="Multimedia" url="hola" className="nav-item" info={multimedia}></NavItem>
                </div>
                
                <div className='nav-search-car'>
                    <div className='nav-search-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <p>Buscar</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </nav>
        </nav>
    );
}
