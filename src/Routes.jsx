import * as React from "react"; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import LayoutLogin from './layout/LayoutLogin';
import  LayoutHome  from "./layout/LayoutHome"; 
import  Registro  from "./pages/Registro"; 
  


export default function Routes(props) {
  
  return (
    <div>
      <Router  >              
        <Route exact path="/"      component={LayoutLogin} />  
        <Route exact path="/login" component={LayoutLogin} />      
        <Route exact path="/home"  component={LayoutHome} />     
        <Route exact path="/registro/:id"  component={Registro} /> 
      </Router>
       
    </div>
  );
}