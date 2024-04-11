import React, {useState, useRef} from 'react';
import{useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Container, H1, Image, ContainerItens, InputLabel, Input, Button,} from '../Home/styles';
import Burger from '../../assets/scoob2.jpg'


const App = () =>{

  //const newOrders = [];

  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  const InputPedido = useRef()
  const InputNome = useRef()
  
 

  async function addNewOrder(){

   const {data: newOrder} = await axios.post("http://localhost:30001/orders", {Pedido: InputPedido.current.value, Nome: InputNome.current.value  })
    
   
   setOrders([...orders,newOrder])

   navigate("/orders");


  }


  return(
    <Container>
      <Image alt="logo-imagem" src={Burger}/>
      <ContainerItens>
      <H1>Faça o seu pedido!</H1>
      <InputLabel>Pedido</InputLabel>
      <Input ref={InputPedido}  placeholder='' />

      <InputLabel>Nome</InputLabel>
      <Input ref={InputNome}  placeholder='Nome' />


      <Button onClick={addNewOrder}>Novo Pedido</Button>

      
           
    


      </ContainerItens>
    </Container>
  )

}

export default App