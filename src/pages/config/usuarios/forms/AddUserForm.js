import React, { useState } from 'react'
import axios from 'axios'
import { Select } from 'antd';  

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const AddUserForm = props => {
	const initialFormState = { ID: null, NAME: '', USERNAME: '', ID_DPTO: ''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	const [DptoSelect, setDptoSelect ] = useState("")
	async function handleChange(value) {
			setDptoSelect(value)
	  }

function CreateUser() {
	var data = JSON.stringify({
		"USERNAME": user.USERNAME,
		"NOME_COMPLETO": user.NAME,
		"ID_DPTO": DptoSelect
	  });
	  
	  var config = {
		method: 'post',
		url: 'http://localhost:8000/checkpointusuarios',
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
		CreateUser()
		props.addUser(user)
		setUser(initialFormState)
		handleChange() 
	}}
> 
 
  <Row xs={2} md={4} lg={6}>
    <Col>Nome<input class="form-control" type="text" name="NAME" value={user.NAME} onChange={handleInputChange} /></Col>
    <Col>Usuario<input class="form-control" type="text" name="USERNAME" value={user.USERNAME} onChange={handleInputChange} /></Col>
	<Col>Departamento<Select class="form-select" style={{ width: 200 }} onChange={handleChange}>
					<option value="1">TECNOLOGIA	</option>
					<option value="2">FISCAL		</option>
					<option value="3">CONTABIL		</option>
					<option value="4">VENDAS		</option>
					<option value="5">POS-VENDAS	</option>
				</Select></Col> 
		
  </Row>
  <button class="btn btn-outline-success">Adicionar Usuario</button>	
</form> 
</Container>
</div>
	)
}

export default AddUserForm
