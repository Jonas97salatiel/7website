import React from 'react';
import './style.css';
import iconfacebook from '../../assets/svg/iconfacebook.svg'
import iconinstagran from '../../assets/svg/iconinstagran.svg'
import iconlinkedin from '../../assets/svg/iconlinkedin.svg'



const Contato = () => {

   return(
   <container className="container__contato">
      
      <div className="contato">
         <div className="title__contato">Contato</div>
         <div className="traco"></div>

         <div className="contato__itens">
         <div className="contato__form">
            <form className="form">
         
               <input type="text" id="name" name="fname" placeholder=" Nome"></input>
               <input type="tel" id="fone" name="fone" placeholder=" 55 (00) 00000-0000"></input>
               <input type="e-mail" id="email" name="email" placeholder=" E-mail"></input>
               <textarea type="mensage" id="mensage" placeholder="Nós diga o que você está pensando..." ></textarea>
               <button type="submit">Enviar</button>
            </form>
         </div>
         <div className="divisao"></div>
         <div className="contato__info">
            <div className="contato__info__endereco">Endereço</div>
            <p>
            Av. das Castanheiras, S/N - Lote 3700 - Águas Claras, Brasília - DF, 70297-400<br/>
            Centro Universitário Euro-Americano
            </p>
            <div className="contato__info__endereco">Redes Sociais</div>
            <img className="contato_icons" src={iconfacebook}></img>
            <img className="contato_icons" src={iconinstagran}></img>
            <img className="contato_icons" src={iconlinkedin}></img>
            




         </div>
         
      </div>
      </div>

      
      
   </container>
    

   )};

export default Contato; 