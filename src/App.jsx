import {PreviewCard} from './previewCard.jsx'
import {Navbar} from './navbar.jsx'
import {Gallery} from './gallery.jsx'
import {Vento} from './vento.jsx'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App (){

    const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCocktails(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setCocktails({ error: 'Error fetching data' });
      });
  }, []);
    return(
        <>
            <Navbar></Navbar>
            <Gallery>
                {cocktails ? (
                    cocktails.drinks.map((cocktail, index) => (
                      <PreviewCard 
                        key={index}
                        text={cocktail.strDrink}
                        imageUrl={cocktail.strDrinkThumb}
                        color="#ccb6a4"
                      />
                    ))
                  ) : (
                    <div>Cargando...</div>
                  )}
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