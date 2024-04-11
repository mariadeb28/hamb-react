import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Container, H1, Image, Input, Button, Order} from '../Orders/styles';
import BurgerScoob from '../../assets/scoobhamb.jpg'
import Trash from '../../assets/trash.svg.svg'

const Orders = () =>{

  //const newOrders = [];

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
  
  useEffect(()=>{

    async function fetchOrders(){

      const {data: newOrders} = await axios.get("http://localhost:30001/orders");
      setOrders(newOrders);

    }

    fetchOrders()

   
  }, [])



  async function deleteOrder(orderId){
    await axios.delete(`http://localhost:30001/orders/${orderId}`)
    const newOrders = orders.filter(order => order.id !== orderId)
    setOrders(newOrders)
  }


  function goBackPage(){
    navigate("/")
  }
 


  return(
    <Container>
      <Image alt="logo-imagem" src={BurgerScoob}/>
      <H1>Pedidos!</H1>
  
      

      <ul>
        { orders.map(order =>(
           <Order key={order.id}>
           
           <div>
            <p>{order.Pedido}</p> 
            
          
             <p><b>{order.Nome}</b></p>
             </div>
             
             
            <button onClick={() => deleteOrder(order.id)}>
              <img src={Trash} alt="lata-de-lixo" />
              </button>
          
            
            </Order>

                    
        ))
         
        }

      </ul>

      <Button isBack={true} onClick={goBackPage}>Voltar</Button>

    
    </Container>
  )

}

export default Orders