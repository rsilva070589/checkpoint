import React,{useState, useEffect } from "react";
import axios from "axios"; 
import { Table, Upload, Button } from 'antd'; 
import { UploadOutlined } from '@ant-design/icons';
export default function ListaIndicador(props) {
    const [indicador,setindicador]=useState([])    
        useEffect(async()=>  {
        axios.get (`http://localhost:8000/indicadores`)   
            .then(res=>{
                const dadosindicador=res.data
                setindicador(dadosindicador) 
            })          
    },[])
 

    const columns = [         
        { title: 'ID_INDICADOR',    dataIndex: 'ID_INDICADOR',  key: 'ID_INDICADOR',    render: text => <a>{text}</a> },
        { title: 'DPTO',            dataIndex: 'DPTO',          key: 'DPTO',            render: text => <a>{text}</a> },
        { title: 'DESCRICAO',       dataIndex: 'DESCRICAO',     key: 'DESCRICAO',       render: text => <a>{text}</a>},
        { title: 'IMAGEM',          dataIndex: 'IMAGEM',        key: 'IMAGEM',          render: text => <a>{text}  <Upload>  <Button> <UploadOutlined />Upload Imagem </Button>  </Upload></a> }, 
        { title: 'ENVIA_EMAIL',     dataIndex: 'ENVIA_EMAIL',   key: 'ENVIA_EMAIL',     render: text => <a>{text}</a>}, 
        { title: 'ENVIA_ALERTA',    dataIndex: 'ENVIA_ALERTA',  key: 'ENVIA_ALERTA',    render: text => <a>{text}</a>}, 
    ];
    
  const data =  indicador; 
    
    return (
         <div>        
         <Table columns={columns} dataSource={data} />        
         </div>
        
    )
  }
