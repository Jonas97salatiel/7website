import React, { Component } from 'react';
import './style.css'

console.log(document.documentElement.scrollTop);

class Servicos extends Component {

   state = {
      className : ''
   }

   handleScroll() { 
      if (document.documentElement.scrollTop >= 1757) {
         this.setState({
           className: 'servicos__website'
         })
       } 
     }

   componentDidMount() {
      window.onscroll = () => this.handleScroll()
    }

   render() {
      return (
         <section id="servicos" className="container__servicos">
            <div className="servicos">
               <div className="title__servicos">Servicos</div>
               <div className="traco"></div>


               <div className="servicos__itens">
                  <div className={this.state.className}>
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

                     <h1 className="servicos__desc__title">Desenvolvimento de sistemas</h1>
                     <p className="servicos__desc__text">Desenvolvimento de sistemas personalizados e ajustados para agilizar e integrar seus processos.</p>
                     
                  </div> 
               </div>
            </div>
         </section>
      )
   }
}

export default Servicos; 