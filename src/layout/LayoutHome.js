import React, {useState, useEffect} from 'react';
import Home from '../pages/Home'; 
import Notification from '../notification/notification';
  

export function Paginas() {
    return(3)
}

 export  function LayoutHome (props) {

  const [ DPTO, setDpto] = useState(0);
  const [ Usuario, setUsuario] = useState(""); 
   

  useEffect(() => { 
    setUsuario  (props.location.state.USERNAMEDIG);
    setDpto    (props.location.state.DPTO);    
  }, []);
 
  return (
 <div>
 
 
<Home DPTO={DPTO} USERNAME={Usuario}/>
<Notification DPTO={DPTO}/> 
      
      </div>
  )

}


export default LayoutHome;