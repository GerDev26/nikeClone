import React from 'react';
import './previewCard.css';

export function PreviewCard({ text, imageUrl, color, url}) {


    const cardColor = {
        backgroundColor: color
    };

    return (
        <a href={url}>
        <article className='p-card-product'>
            <div className='p-card-image-container' style={cardColor}>
                <img className='p-card-image' src={imageUrl} alt="" />
            </div>
            <p className='p-card-text font-large'>{text}</p>

        </article>
        </a>
    );
}
