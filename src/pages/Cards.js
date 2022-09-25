
import React,{useState, useEffect } from "react";
import Progress from '../components/Progress'; 
import axios from "axios"; 
import {  Card } from 'antd';  
import { Container} from 'react-bootstrap'  
import Imagens from '../img/imagens'
  
const { Meta } = Card; 

export default function ListaErros(props){
    const [erros,setErros]=useState([])
    const [contador, setContador] = React.useState(1); 

     const Descontar = () => {
        const timer = setTimeout(() => {
          setContador(contador - 1);
        }, 1000);
        return timer;
      }; 
 
      useEffect(() => {
        var timer;
        if (contador === 0) { 
        } else {
          timer = Descontar();
        }
        return () => {
          clearInterval(timer);
        };
      }, [contador]);
     
     
   
    useEffect( async()=>  {        
        if ( contador === 0 ){
               await axios.get (`http://localhost:8000/checkpoint/?dpto=${props.DPTOCard}`)
                .then(res=>{
                    const dadosErros=res.data               
                        setErros(dadosErros) 
                        setContador(60)                   
                    }       
                )
             }   
        }) 
     


    return ( 
    <Container > 
        
       <div align="center"><Progress /></div>
        <div className="container-fluid d-flex flex-wrap"
        >  
         {erros.map(function(i){ 
          return (            
            <Card key={i.COD_TIPO} style={{ width: 230 }}   
                className="list-group-flush"
                onClick={() =>props.aoEnviar([i.ID_INDICADOR,i.DESCRICAO])}
                hoverable                    
                
                cover={ <Imagens IMG={i.IMAGEM} />}>  
                <Meta 
                description= {i.DESCRICAO } 
                title={'Qtde: ' + i.QTDE} 
                />                    
            </Card>  
          );
         })}
        </div>  
    </Container>
    )
}
 

   