import {PreviewCard} from './previewCard.jsx'
import {Navbar} from './navbar.jsx'
import {Gallery} from './gallery.jsx'
import {Vento} from './vento.jsx'
import './App.css'

export default function App (){
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