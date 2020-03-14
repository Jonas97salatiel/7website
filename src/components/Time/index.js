import React from 'react';
import './time.css'
import image from './image.png'

const Time = () => (

   <container className="container__time">
      
      <div className="time">
         <div className="title">
            <div className="title__time">Nosso Time</div>
            <div className="traco_time"></div>
         </div>
         <div className="time__info">
            <div className="time_text">
               <img className="time_image" src={image} />
                  <p className="time__text ">
                     Jessica Mazonini
                  </p>
                  <p className="time__text ">
                     Presidente(a)
                  </p>
               
            </div>
               <div className="time_text">
                  <img className="time_image" src={image} />
                     <p className="time__text ">
                                       Jonas Salatiel
                     </p>
               </div>
               <div className="time_text">
                  <img className="time_image" src={image} />
                  <p className="time__text">
                                       Victor
                  </p>
               </div>
               <div className="time_text">
                  <img className="time_image" src={image} />
                  <p className="time__text ">
                                       Aline Lopes
                  </p>
               </div>
               <div className="time_text">
                  <img className="time_image" src={image} />
                     <p className="time__text ">
                                       Carlos Henrique
                     </p>
               </div>

         </div>
      </div>

   </container>
);


export default Time; 