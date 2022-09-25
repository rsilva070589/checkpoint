import React, { useState } from 'react'
import axios from 'axios'
import { Select } from 'antd';  

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const AddUserForm = props => {
	const initialFormState = { 	ID: null, 
								DESCRICAO: '',
								DPTO: '', 
								IMAGEM: '',
								ENVIA_EMAIL: '',
								ENVIA_ALERTA: '',	}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	const [DptoSelect, setDptoSelect ] = useState("")
	async function handleChange(value) {
			setDptoSelect(value)
	  }
	const [ImagemSelect, setImagemSelect ] = useState("S")
  	async function handleChangeImagem(value) {
		setImagemSelect(value)
  	}
	  const [EmailSelect, setEmailSelect ] = useState("S")
  	async function handleChangeEmail(value) {
		setEmailSelect(value)
  	}
	  const [AlertaSelect, setAlertaSelect ] = useState("S")
  	async function handleChangeAlerta(value) {
		setAlertaSelect(value)
  	}

	  function check_form(){ 
		if (DptoSelect===""){
		  alert('Por favor o Departamento');   
		} else { return true; }
	  }

function CreateUser() {
	var data = JSON.stringify({	 
		"DPTO": DptoSelect,
		"DESCRICAO": user.DESCRICAO,
		"IMAGEM": ImagemSelect, 
		"ENVIA_EMAIL": EmailSelect,
		"ENVIA_ALERTA": AlertaSelect 
	  });
	  
	  var config = {
		method: 'post',
		url: 'http://localhost:8000/indicadores',
		headers: { 
		  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjExMDAwMjczLCJpYXQiOjE2NDQ0OTYzNTl9.1aG229wcsfUF0hvQVxUfgw6I304u7pDf7Ie4UGsQMF0', 
		  'Content-Type': 'application/json'
		},
		data : data
	  };
	  
	  axios(config)
	  .then(function (response) {
		console.log(JSON.stringify(response.data));
	  })
	  .catch(function (error) {
		console.log(error);
	  });
	}
	

	return (
 
<div class="form-control">

<Container >
<form  
	onSubmit={event => {
		event.preventDefault() 
		check_form()
		CreateUser()
		props.addUser(user)
		setUser(initialFormState)
		handleChange() 
	}}
> 
 
  <Row xs={2} md={4} lg={2}>    
    <Col>Descriçao<input class="form-control" type="text" name="DESCRICAO" value={user.DESCRICAO} onChange={handleInputChange} /></Col>
  </Row>	
	<Row  lg={4}> 
	 <Col>Departamento<Select class="form-select" style={{ width: 250 }} onChange={handleChange}>
					<option value="1">TECNOLOGIA	</option>
					<option value="2">FISCAL		</option>
					<option value="3">CONTABIL		</option>
					<option value="4">VENDAS		</option>
					<option value="5">POS-VENDAS	</option>
				</Select></Col> 

	<Col>Imagem: <Select class="form-select" style={{ width: 250 }} onChange={handleChangeImagem}>
		<option value="1">TECNOLOGIA	</option>
		<option value="2">FISCAL		</option>
		<option value="3">CONTABIL		</option>
		<option value="4">VENDAS		</option>
		<option value="5">POS-VENDAS	</option>
	</Select></Col> 

	<Col>Email: <Select class="form-select" style={{ width: 250 }} onChange={handleChangeEmail}>
	<option value="S">Sim	</option>
		<option value="N">Nao	</option>
				</Select></Col> 

	<Col>Alerta: <Select class="form-select" style={{ width: 250 }} onChange={handleChangeAlerta}>
		<option value="S">Sim	</option>
		<option value="N">Nao	</option> 
	</Select></Col> 			
		
  </Row>
  <button class="btn btn-outline-success">Adicionar Indicador</button>	
</form> 
</Container>
</div>
	)
}

export default AddUserForm
