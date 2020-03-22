import React from 'react';
import './style.css'


const Servicos = () => (

   <section className="container__servicos">
      <div className="servicos">
         <div className="title__servicos">Servicos</div>
         <div className="traco"></div>


         <div className="servicos__itens">
            <div className="servicos__website">
               <div className="website__nav">
                  <div className="website__logo"></div>
                  
                  <div className="website__menu">
                     <div className="website__menu__itens"></div>
                     <div className="website__menu__itens"></div>
                     <div className="website__menu__itens"></div>
                  </div>
               </div>
               <div className="website__section">
                  <div className="website__section__img"></div>
                  <div className="website__section__txt">
                     <div className="website__section__txt__item"></div>
                     <div className="website__section__txt__item"></div>
                     <div className="website__section__txt__item"></div>
                  </div>
               </div>
               <div className="website__section1">
                     <div className="website__section__txt__item1"></div>
                     <div className="website__section__txt__item1"></div>
                     <div className="website__section__txt__item1"></div>
               </div>

            </div>  
            <div className="servicos__desc">
               <h1 className="servicos__desc__title">Desenvolvimento de sites</h1>
               <p className="servicos__desc__text">Desenvolvimento de sites responsivos com sistemas gerenciadores de conteúdo (CMS).</p>
            </div> 
         </div>
      </div>
   </section>
    
   );


export default Servicos; 