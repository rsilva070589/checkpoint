
import React,{useState} from "react";
import Cards from   './Cards.js';
import Detalhe from './Detalhe.js';  
import Indicadores from './config/indicadores/indicadores';
import Usuarios from './config/usuarios/usuarios';
import Email from './config/email/email';
import {Container , Navbar, NavDropdown,  Nav}  from 'react-bootstrap'
   
  
function FormularioCadastro(props) {


    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados]  = useState({});

    const formularios = [     
      <Cards   DPTOCard={props.DPTO}
               aoEnviar={coletarDados}
               />,      
      <Detalhe aoEnviar={coletarDados}
               Pcod_tipo ={dadosColetados[0]}
               Pdesc_tipo={dadosColetados[1]} 
                 />,
      <Indicadores/>,
      <Usuarios/>,
      <Email/>
     
    ];
    
     function coletarDados(dados){
      setDados({...dadosColetados, ...dados});
      if (etapaAtual === 0){
        proximo();
      }else {
        anterior();
      }
      
    }
    function proximo() {
      setEtapaAtual(etapaAtual+1);
    }
    function anterior() {
      setEtapaAtual(etapaAtual-1);
    }
    function ParmIndicador() {
      setEtapaAtual(etapaAtual - etapaAtual + 2);
    }
    function ParmUsuarios() {
      setEtapaAtual(etapaAtual - etapaAtual + 3);
    }
    function ParmEnvEmail() {
      setEtapaAtual(etapaAtual - etapaAtual + 4);
    }
    
    return <>
 
  {[false].map((expand) => (
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Container>
   <Navbar.Brand href="/home">CheckPoint</Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto">
     
       <NavDropdown title="Parametros" id="collasible-nav-dropdown">
         <NavDropdown.Item onClick={(event) => { 
                        ParmUsuarios()
                        }}>1. Usuarios</NavDropdown.Item>
         <NavDropdown.Item onClick={(event) => { 
                        ParmIndicador()
                        }}>2. Indicadores</NavDropdown.Item>     
         <NavDropdown.Item onClick={(event) => { 
                        ParmEnvEmail()
                        }}>3. Envio de Email</NavDropdown.Item>  
       </NavDropdown>
     </Nav>
     <Nav>
     
       <Nav.Link eventKey={2} href="/">
          Ola  {props.USERNAME}  - Sair
       </Nav.Link>
     </Nav>
     
   </Navbar.Collapse>   
   </Container>
   
 </Navbar>    
  ))}
  {formularios[etapaAtual]} 
 
    </>;
  }
   
  export default FormularioCadastro; 