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
                     Jessica Mazoni
                  </p>
                  <p className="time__text ">
                     Presidenta
                  </p>
                  <a href="INSTAGRAM"><i class="fab fa-instagram time_instF"></i></a>
                     <a href="LINKEDIN AQ "><i class="fab fa-linkedin time_instF "></i></a>
               
            </div>
               <div className="time_text">
                  <img className="time_image" src={image} />
                     <p className="time__text ">
                                       Jonas Salatiel
                     </p>
                     <p className="time__text ">
                        NDP
                     </p>
                     <a href="https://www.instagram.com/jonassalatiel/?hl=pt-br"><i class="fab fa-instagram time_instF"></i></a>
                     <a href="https://www.linkedin.com/in/jonas-salatiel/"><i class="fab fa-linkedin time_instF "></i></a>
               </div>
               <div className="time_text">
                  <img className="time_image" src={image} />
                  <p className="time__text">
                                       Victor
                  </p>
                  <p className="time__text ">
                        NAF
                  </p>
                  <a href="INSTAGRAM"><i class="fab fa-instagram time_instF"></i></a>
                     <a href="LINKEDIN AQ "><i class="fab fa-linkedin time_instF "></i></a>
               </div>
               <div className="time_text">
                  <img className="time_image" src={image} />
                  <p className="time__text ">
                                       Aline Lopes
                  </p>
                  <p className="time__text ">
                        NGP
                     </p>
                     <a href="INSTAGRAM"><i class="fab fa-instagram time_instF"></i></a>
                     <a href="LINKEDIN AQ "><i class="fab fa-linkedin time_instF "></i></a>
               </div>
               <div className="time_text">
                  <img className="time_image" src={image} />
                     <p className="time__text ">
                                       Carlos Henrique
                     </p>
                     <p className="time__text ">
                        NCM
                     </p>
                     <a href="INSTAGRAM"><i class="fab fa-instagram time_instF"></i></a>
                     <a href="LINKEDIN AQ "><i class="fab fa-linkedin time_instF "></i></a>
               </div>

         </div>
      </div>

   </container>
);


export default Time; 