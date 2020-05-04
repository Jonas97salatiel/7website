import React, { useState } from 'react';
import './style.css';
import iconfacebook from '../../assets/svg/iconfacebook.svg'
import iconinstagran from '../../assets/svg/iconinstagran.svg'
import iconlinkedin from '../../assets/svg/iconlinkedin.svg'

import api from '../../services/api'


const Contato = () => {
   const [name, setName] = useState('')
   const [phone, setPhone] = useState('')
   const [email, setEmail] = useState('')
   const [description, setDescription] = useState('')

   async function handleNewContact(e) {
      e.preventDefault();

      const data = {
         name,
         phone,
         email,
         description
      }
      try {
         api.post('/', data)

         alert(`${data.name}, seu contato foi feito conosco com sucesso!\nEntraremos em contato em breve!`)
      } catch (err) {
         alert('Erro no envio, tente novamente')
      }
   }

   return(
   <container id="contato" className="container__contato">
      
      <div className="contato">
         <div className="title__contato">Contato</div>
         <div className="traco"></div>

         <div className="contato__itens">
         <div className="contato__form">
            <form className="form" onSubmit={handleNewContact}>     
               <input 
                  type="text" 
                  id="name" 
                  name="fname" 
                  placeholder=" Nome"
                  value={name}
                  onChange={e => setName(e.target.value)} 
               />

               <input 
                  type="tel" 
                  id="fone" 
                  name="fone" 
                  placeholder=" 55 (00) 00000-0000"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
               />

               <input 
                  type="e-mail" 
                  id="email" 
                  name="email" 
                  placeholder=" E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)} 
               />

               <textarea 
                  type="mensage" 
                  id="mensage" 
                  placeholder="Nós diga o que você está pensando..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
               />

               <button type="submit">Enviar</button>
            </form>
         </div>
         <div className="contato__i">
            <div className="contato__info">
               <div className="contato__info__endereco">Endereço</div>
               <p>
                  Av. das Castanheiras, S/N - Lote 3700 - Águas Claras, Brasília - DF, 70297-400<br/>
                  Centro Universitário Euro-Americano
               </p>
               <div className="contato__info__endereco">Redes Sociais</div>
               <a href="https://www.instagram.com/7sightjr/"><img className="contato_icons" src={iconinstagran}></img></a>
               <a href="https://br.linkedin.com/company/7sight"><img className="contato_icons" src={iconlinkedin}></img></a>
            </div>
         </div>
      </div>   
      </div>
      
      
   </container>
    

   )};

export default Contato; 