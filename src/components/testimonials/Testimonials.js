import React from 'react';
import './Testimonials.css';
import biedronka from '../images/biedronka.png';
import mrowka from '../images/mrowka.png';
import bp from '../images/bp.png';
import paleo from '../images/paleo.png';
import amplus from '../images/amplus.png';


export function Testimonials() {
  return (
    <div id="testimonials">
      <h2 className="text">
        Zaufali mi
      </h2>
      <div className="image-container">
        <div className="biedronka">
          <a href="https://www.google.pl/maps/place/Biedronka/@50.1900698,20.2962996,17z/data=!4m5!3m4!1s0x47164af0d2c9914d:0xa29c0c4a5c81b6d1!8m2!3d50.1893853!4d20.2963728" target="_blank" rel="noreferrer"><img src={biedronka} alt="Logo Biedronka"/></a>
        </div>
        <div className="mrowka">
          <a href="https://www.google.pl/maps/place/PSB+Mr%C3%B3wka/@50.1948577,20.2741827,17z/data=!4m5!3m4!1s0x0:0xd744d29ad8a0ac9!8m2!3d50.1945737!4d20.2730925" target="_blank" rel="noreferrer"><img src={mrowka} alt="Logo Mrówka"/></a>
        </div>
        <div className="bp">
          <a href="https://www.google.pl/maps/place/bp/@50.1947217,20.2743517,17z/data=!4m5!3m4!1s0x47164b0418e65b23:0x6e9ac331b70c06e9!8m2!3d50.1945146!4d20.2739177" target="_blank" rel="noreferrer"><img src={bp} alt="Logo BP"/></a>
        </div>
        <div className="paleo">
          <a href="https://www.google.pl/maps/place/PALEO+Opatkowice/@50.1995769,20.3003919,16z/data=!4m5!3m4!1s0x47164ae8934961a3:0xc3bc7b328f48aa00!8m2!3d50.2012286!4d20.3030005" target="_blank" rel="noreferrer"><img src={paleo} alt="Logo Paleo"/></a>
        </div>
        <div className="amplus">
          <a href="https://www.google.pl/maps/place/Amplus+SA/@50.2171174,20.1881612,14z/data=!4m5!3m4!1s0x47164ce5043c5f41:0x4ef98c3d9687820e!8m2!3d50.219987!4d20.1824535" target="_blank" rel="noreferrer"><img src={amplus} alt="Logo Amplus"/></a>
        </div>
      </div>
    </div>
  )
}
