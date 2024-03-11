import React, { useEffect } from 'react';
import './gallery.css'
export function Gallery(props){
      
    let translate = 0;

    const windowWidth = () => {

        const anchoPantalla = window.innerWidth;

        console.log(anchoPantalla)
        if(anchoPantalla <= 600){
            return 2
        }
        else if(anchoPantalla <= 900){
            return 3
        }
        else if(anchoPantalla <= 1100){
            return 4
        }
        else if(anchoPantalla <= 1400){
            return 5
        }
        else{
            return 6
        }
    }

    const limit = () => {
        let products = document.querySelectorAll('.p-card-product');
        let limit = 0
        products.forEach(product => {
            limit += 270;
        });
        limit = limit - (270*windowWidth())
        return -limit
    }

    const move = () => {
        let products = document.querySelectorAll('.p-card-product');
            products.forEach(product => {
                product.style.transform = "translateX(" + translate + "px)";
            });
    };

    const moveRight = () => {
        if(translate > limit()){
            translate-=270
            move();
        }
        else{
            translate = 0
            move();
        }
    }
    const moveLeft = () => {
        if(translate < 0){
            translate+=270
            move();
        }
        else{
            translate = limit()
            move()
        }
    }

    return(
      <section className='gallery'>
        <div className='gal-btn-container'>
            <button className='gal-btn' onClick={moveLeft}>
                <svg className='gal-btn-img' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>
            <button className='gal-btn' onClick={moveRight}>
                <svg className='gal-btn-img' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
        {props.children}
      </section>
    );
}