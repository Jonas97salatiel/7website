
import React from 'react';

import './style.css'
import image from './image.jpg';


const Sobre = () => {

    return (

        <container id="sobre" className="container__sobre">

            <div className="sobre">
                <div className="title">
                    <div className="title__sobre">Sobre</div>
                    <div className="traco"></div>
                </div>
                <div className="sobre__info">
                    <p className="sobre__text">
                        Somos a 7Sight, Empresa Júnior, gerida e
                        composta por alunos do curso de Sistemas de
                        Informação da UNIEURO de Brasília. Formada em
                        Março de 2018, colocamos na prática o
                        conhecimento adquirido em sala de aula,
                        promovendo a capacitação dos membros ao
                        atender nossos clientes buscando sempre a
                        melhor solução!
                    </p> 
                    <img className="sobre__image" src={image}/> 
                      
                </div>
            </div>
            
        </container>
    );
    
    };



export default Sobre;