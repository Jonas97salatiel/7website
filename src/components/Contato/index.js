import React from 'react';
import './style.css';


const Contato = () => {

   return(
   <container className="container__contato">
      
      <div className="contato">
         <div className="title__contato">Contato</div>
         <div className="traco"></div>

         <div className="contato__form">
            <form className="form">
         
               <input type="text" id="name" name="fname" placeholder=" Nome"></input>
               <input type="tel" id="fone" name="fname" placeholder=" Telefone"></input>
               <input type="e-mail" id="e-mai" name="fname" placeholder=" E-mail"></input>
               <input type="text" id="Mensager" name="fname"placeholder=" Mensagem"></input>

            </form>
         </div>
      </div>
      
   </container>
    

   )};

export default Contato; 