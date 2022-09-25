import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';  
import 'antd/dist/antd.css';
import './index.css';
import Routes from './Routes.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';

{document.title = 'CheckPoint'}  

 
ReactDOM.render( 
  <React.StrictMode>  
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
); 

 
