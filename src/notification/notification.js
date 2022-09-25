import React,{useState, useEffect} from "react";
import axios from 'axios';  
import WebNotification from 'react-web-notifications' 

import TECNOLOGIA from '../img/TECNOLOGIA.png';
import FISCAL from '../img/FISCAL.png';
import CONTAB from '../img/CONTAB.png';
import VENDAS from '../img/NOTAS.png';
import POSVENDAS from '../img/POSVENDAS.png';   
import INTEGRACAO from '../img/INTEGRACAO.png';
import NOTAS from '../img/NOTAS.png';


const imagem = [    TECNOLOGIA, 
                    FISCAL, 
                    CONTAB,
                    VENDAS, 
                    POSVENDAS,
                    INTEGRACAO,
                    NOTAS]
   
export default function GetNotification (props) {    
  
    console.log('grupo atual notificaçao -> '+props.DPTO)
    const [listaRecados,setRecados]=useState([])  
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
    

    useEffect(()=>  {
        if (contador===0) {
        axios.get (`http://localhost:8000/registros/${props.DPTO}`)
            .then(res=>{
                const dadosRecados=res.data 
                    setRecados(dadosRecados) 
                    setContador(60)                   
                }        
            )
            }
    }) 
    return (
        <div> 
                
          {listaRecados.map(function(i){ 
          return ( 
          <div key={i.ID_REGISTRO}> 
            { listaRecados.length > 0 &&
                <WebNotification
                title={i.DESCRICAO} // the title prop is required
                icon= {imagem[i.IMAGEM]}
                body={' '+i.DESCRICAO +' => '+ i.DETALHE}
                timeout={25000}
                onClickFn={ () => window.open(`http://localhost:4000/registro/${i.ID_REGISTRO}`, '_blank') } 
                // open your own site on notification click
                /> 
            }   
           
          </div>  
          );
         })} 
        </div>

        
    ) 
 
}


