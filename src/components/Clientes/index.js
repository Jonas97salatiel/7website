import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../styles/contato.css';
import '../../styles/navbar.css';


const Clientes = () => {
   return (
      <div class="container seven-navbar inputz" >
         <h1>Contatos</h1>
         <div class="row">
            <div class="col">
               <Form className="seven-navbar inputz ">
                  <FormGroup classeName="inputz">
                     <Label for="exampleEmail">Nome:</Label>
                     <Input classeName="inputz" type="email" name="email" id="nome" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                     <Label for="exampleEmail">E-mail:</Label>
                     <Input classeName="inputz" type="email" name="email" id="email" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                     <Label for="exampleEmail">Telefone:</Label>
                     <Input classeName="inputz" type="email" name="email" id="telefone" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                     <Label for="exampleEmail">Mensagem:</Label>
                     <Input classeName="inputz" type="email" name="email" id="mensagem" placeholder="" />
                  </FormGroup>
                  <Button ClassName="inputz">Submit</Button>
               </Form>
            </div>



            <div class="col seven-navbar">
               <h1 className="inputz">Endereço</h1>
               <p>Av. das Castanheiras, S/N - Lote 3700 - Águas Claras, Brasília - DF, 70297-400</p>
               <p>Centro Universitário Euro-Americano</p>
            </div>



         </div>
      </div>
   );
}


export default Clientes; 
