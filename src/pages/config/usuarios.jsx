import React,{useState, useLayoutEffect } from "react";
import axios from "axios"; 
import { Table } from 'antd'; 
 
export default function ListaIndicador(props) {
    const [usuario,setUsuarios]=useState([])    
    useLayoutEffect(()=>  {
        axios.get (`http://localhost:8000/checkpointusuarios`)   
            .then(res=>{
                const dadosusuario=res.data
                setUsuarios(dadosusuario) 
            })          
    })
 

    const columns = [         
        { title: 'ID_USUARIO',     dataIndex: 'ID_USUARIO',key: 'ID_USUARIO', render: text => <a>{text}</a> },
        { title: 'USERNAME',       dataIndex: 'USERNAME',key: 'USERNAME', render: text => <a>{text}</a>},
        { title: 'NOME_COMPLETO',  dataIndex: 'NOME_COMPLETO',key: 'NOME_COMPLETO', render: text => <a>{text}</a>}, 
        { title: 'ID_GRUPO',       dataIndex: 'ID_GRUPO',key: 'ID_GRUPO', render: text => <a>{text}</a>}, 
        { title: 'DPTO',           dataIndex: 'DPTO',key: 'DPTO', render: text => <a>{text}</a>}, 
    ];
    
  const data =  usuario; 
    
    return (
         <div>        
         <Table columns={columns} dataSource={data} /> 
         </div>
        
    )
  }
