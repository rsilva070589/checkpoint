import React, {useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";
import { Card } from 'antd'; 
import axios from 'axios';   

export default function Login() {  
  
    const history = useHistory();
    const [Username, setUsername] = useState(null)
    const [Password, setPassword] = useState(null)
   
  
    const onsubmit =(e) =>{
        e.preventDefault();               
        if (Username !== Password) {
            alert("Usuario ou Senha incorretos!")
        } else { 
                pegausuarios()  
                }
        } 
        
        async function pegausuarios(){  
            axios.get (`http://localhost:8000/usuarios/?USERNAME=${Username}`)
                .then(res=>{
                    const dados=res.data  
                    dados.map(function(i){     
                        history.push({               
                            pathname: '/home',  
                            state: { USERNAMEDIG: Username, DPTO: i.DPTO},
                            }) 
                        }) 
                }     
                )
        } 
   
    
  

  return (
    
   <div align="center" className="mt-3 mt-md-5">
       <div>
      

    <Card title="Login"  style={{ width: 500 }}>
        <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 12,
        }}
  
 
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input onChange={(e) => setUsername(e.target.value)} />
           
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
           
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
            offset: 8,
            span: 8,
            }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 8,
            }}
        >
            <Button type="primary" onClick={onsubmit}>
               Login
            </Button>
        </Form.Item>
        </Form>

      </Card>
      </div>
    </div>
  );
};
