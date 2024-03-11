import './buyButton.css'
export function BuyButton({url}){
    if(url== undefined){
      return(
        <button className='buy-btn font-normal'> Comprar </button>
      );
    }
    else{
      return(
        <a href={`${url}`}><button className='buy-btn font-normal'> Comprar </button></a>
      );
    }
}