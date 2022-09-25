import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Select } from 'antd'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	const [DptoSelect, setDptoSelect ] = useState("")  
	async function handleChange(value) {
			setDptoSelect(value)
	  }
  const [AtivoSelect, setAtivoSelect ] = useState("S")
  async function handleChangeAtivo(value) {
    setAtivoSelect(value)
  }

    function UpdateUser() {
      var data = JSON.stringify({
        "USERNAME": user.USERNAME,
        "NOME_COMPLETO": user.NAME,
        "ID_DPTO": DptoSelect,
        "ATIVO": AtivoSelect
        });
        
        var config = {
        method: 'put',
        url: `http://localhost:8000/checkpointusuarios/${user.ID}`,
        headers: {        
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
        UpdateUser()
        props.updateUser(user.ID, user)
      }}
    >
       <Row xs={2} md={4} lg={6}> 
          <Col>Name <input class="form-control" type="text" name="NAME" value={user.NAME} onChange={handleInputChange} />  </Col>
          <Col>Username <input class="form-control" type="text" name="USERNAME" value={user.USERNAME} onChange={handleInputChange} />  </Col>
          <Col>Dpto     
              <Select class="form-select"  style={{ width: 200 }} onChange={handleChange}>
                <option value="1">TECNOLOGIA	</option>
                <option value="2">FISCAL		</option>
                <option value="3">CONTABIL		</option>
                <option value="4">VENDAS		</option>
                <option value="5" selected>POS-VENDAS	</option>
              </Select></Col>
          

          <Col>Ativo         
              <Select class="form-select" style={{ width: 200 }} onChange={handleChangeAtivo}>
                <option value="S" selected>ATIVO	</option>
                <option value="N">DESATIVADO</option>
              </Select>
          </Col>
      </Row>
		
       
      <button class="btn btn-outline-success">Update</button>
      <button class="btn btn-outline-danger" onClick={() => props.setEditing(false)} >  Cancel  </button>
    </form>
    </Container>
    </div>
  )
}

export default EditUserForm
