import React,{useState, useEffect } from "react";
import Progress from '../components/Progress';  
import { Layout } from 'antd';  
import { useParams } from "react-router-dom";
import axios from 'axios'; 
import Imagens from '../img/imagens';
import { Container } from "react-bootstrap";
 
const { Header } = Layout; 

 
 
export default  function ListaDetalhe (path) {

  let {id} = useParams(); 

  const [listaRecados,setRecados]=useState([])     
    useEffect( async ()=>  {        
        await axios.get (`http://localhost:8000/registros/?ID_REGISTRO=${id}`)
            .then(res=>{
                const dadosRecados=res.data 
                    setRecados(dadosRecados)                    
                }        
            )           
    },[])  

  console.log(id); 
 
    return (
         <div>
          <Layout>      
          <Header/>     
          <div> 
            <div align="center"><  Progress /></div>          
          
            
          {listaRecados.map(function(i){ 
          return (   
           <>           
          <Container key={i.COD_TIPO}> 
          <h1>Detalhes do Registro:  # {id}  </h1>
          <Imagens IMG={i.IMAGEM}  />
              <br/><br/>
         
          <h1>Marca: {i.MARCA}</h1> 
          <h1>Indicador: {i.DESCRICAO}</h1> 
          <h1>Empresa: {i.COD_EMPRESA}</h1>             
          <h1>Detalhe: {i.DETALHE}</h1>             
          </Container>

          </>
          );
         })}

<br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
         </Layout>  
         
         </div>
        
    )
  }
