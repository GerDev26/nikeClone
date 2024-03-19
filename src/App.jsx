import {PreviewCard} from './previewCard.jsx'
import {Navbar} from './navbar.jsx'
import {Gallery} from './gallery.jsx'
import {Vento} from './vento.jsx'
import './App.css'
import { useState } from 'react'

export default function App (){

/*     const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
    fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json())
      .then(data => {
        setCocktails(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setCocktails({ error: 'Error fetching data' });
      });
  }, []); */
    return(
        <>
            <Navbar></Navbar>
            <Gallery>
              <PreviewCard 
                text="Air Force" 
                imageUrl="img/zapas.png"
                color="#ccb6a4">
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
        </>
    
    )
}