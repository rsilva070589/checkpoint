import React,{useState, useEffect } from "react";
import axios from "axios"; 
import { Table } from 'antd';
import Progress from '../components/Progress'; 
import { Container } from 'react-bootstrap' 


 
export default function ListaDetalhe(props) {
    const [detalhe,setDetalhe]=useState([])    
        useEffect( async ()=>  {
        axios.get (`http://localhost:8000/detalhe/?ID_INDICADOR=${props.Pcod_tipo}`)   
            .then(res=>{
                const dadosDetalhe=res.data
                setDetalhe(dadosDetalhe) 
            })          
    },[])

    console.log(props.Pcod_tipo)

    const columns = [         
        { title: 'MARCA',   dataIndex: 'MARCA',key: 'MARCA', render: text => <a>{text}</a> },
        { title: 'Empresa', dataIndex: 'COD_EMPRESA',key: 'COD_EMPRESA', render: text => <a>{text}</a>},
        { title: 'Detalhe', dataIndex: 'DETALHE',key: 'DETALHE', render: text => <a>{text}</a>}, 
    ];
    
  const data =  detalhe; 
    
    return (
      <Container>
         <div>
           <Progress />
          <h2>{props.Pcod_tipo} - {props.Pdesc_tipo}</h2> 
         
         
         <Table columns={columns} dataSource={data} />
         
         <button   
            class="btn btn-outline-danger"
            onClick={(event) => {
            event.preventDefault();                                       
            props.aoEnviar()       
            }}  
                >
          Voltar
         </button> 
         </div>
         </Container>
        
    )
  }
