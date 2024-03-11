import React, { useEffect } from 'react';
import { BuyButton } from './buyButton';
import './vento.css';

export function Vento({ img, type, color }) {

  useEffect(() => {
    updateItemColor();
  });

  const updateItemColor = () => {
    const newColor = color
    if (newColor) {
      const items = document.querySelectorAll('.vento-item');
      items.forEach(item => {
        item.style.backgroundColor = newColor;
      });
    }
  };

  return (
    <section className='vento'>
      <div className='vento-item vento-main-item'>
        <img className='vento-img' src={img[0]} alt="" />
        <div className='vento-container'>
          <p className='font-large'>{type[0]}</p>
          <BuyButton></BuyButton>
        </div>
      </div>
      <div className='vento-item'>
        <img className='vento-img' src={img[1]} alt="" />
        <div className='vento-container'>
          <p className='font-large'>{type[1]}</p>
          <BuyButton></BuyButton>
        </div>
      </div>
      <div className='vento-item'>
        <img className='vento-img' src={img[2]} alt="" />
        <div className='vento-container'>
          <p className='font-large'>{type[2]}</p>
          <BuyButton></BuyButton>
        </div>
      </div>
    </section>
  );
}
