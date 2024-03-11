import React from 'react';
import './navbar.css';

export function Navbar() {

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
                    <a href="">Destacados</a>
                    <a href="">Hombre</a>
                    <a href="">Mujer</a>
                    <a href="">Niño/a</a>
                    <a href="">Accesorios</a>
                    <a href="">Oportunidades</a>
                </div>
                
                <div className='nav-search-car'>
                    <div className='nav-search-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <p>Buscar</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                </div>
            </nav>
        </nav>
    );
}