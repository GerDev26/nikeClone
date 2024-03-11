import React from 'react';
import ReactDOM from 'react-dom';
import {PreviewCard} from './previewCard.jsx'
import {BuyButton} from './buyButton.jsx'
import {Navbar} from './navbar.jsx'
import {Gallery} from './gallery.jsx'
import {Vento} from './vento.jsx'
import './main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Navbar></Navbar>
    <Gallery>
      <PreviewCard 
        text="Air Force" 
        imageUrl="img/zapas.png"
        color="#ccb6a4">
      </PreviewCard>
      <PreviewCard 
        text="Jordan" 
        imageUrl="img/zapas2.png"
        color="pink">
      </PreviewCard>
      <PreviewCard
        url="Hola" 
        text="Air Force" 
        imageUrl="img/nike.png"
        color="violet">
      </PreviewCard>
      <PreviewCard 
        text="Air Force" 
        imageUrl="img/zapas.png"
        color="#ccb6a4">
      </PreviewCard>
      <PreviewCard 
        text="Jordan" 
        imageUrl="img/zapas2.png"
        color="pink">
      </PreviewCard>
      <PreviewCard
        url="Hola" 
        text="Air Force" 
        imageUrl="img/nike.png"
        color="violet">
      </PreviewCard>
      <PreviewCard 
        text="Air Force" 
        imageUrl="img/zapas.png"
        color="#ccb6a4">
      </PreviewCard>
      <PreviewCard 
        text="Jordan" 
        imageUrl="img/zapas2.png"
        color="pink">
      </PreviewCard>
      <PreviewCard
        url="Hola" 
        text="Air Force" 
        imageUrl="img/nike.png"
        color="violet">
      </PreviewCard>
      <PreviewCard 
        text="Air Force" 
        imageUrl="img/zapas.png"
        color="#ccb6a4">
      </PreviewCard>
      <PreviewCard 
        text="Jordan" 
        imageUrl="img/zapas2.png"
        color="pink">
      </PreviewCard>
      <PreviewCard
        url="Hola" 
        text="Air Force" 
        imageUrl="img/nike.png"
        color="violet">
      </PreviewCard>
    </Gallery>
    
    <Vento
      img=
      {[
        'img/remera.png',
        'img/zapas2.png',
        'img/mochila.png'
      ]}
      type=
      {[
        'Remera',
        'Zapatilla',
        'Mochila'
      ]}
      color="#ebdec9">
    </Vento>

  </React.Fragment>
)
