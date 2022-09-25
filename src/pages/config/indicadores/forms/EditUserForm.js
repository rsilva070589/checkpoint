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
    const Vdpto = 1;

  const [AtivoSelect, setAtivoSelect ] = useState("S")
  async function handleChangeAtivo(value) {
    setAtivoSelect(value)
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

    function UpdateUser() {
      var data = JSON.stringify({
        "DESCRICAO": user.DESCRICAO,
        "DPTO": DptoSelect,      
        "ATIVO": AtivoSelect,
        "ENVIA_EMAIL": EmailSelect,
        "ENVIA_ALERTA": AlertaSelect,
        "SQL": user.SQL,
        });
        
        var config = {
        method: 'put',
        url: `http://localhost:8000/indicadores/${user.ID}`,
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
        check_form()
        UpdateUser()
        props.updateUser(user.ID, user)
      }}
    >
       <Row xs={2} md={4} lg={6}> 
          <Col>Descricao <input class="form-control" type="text" name="DESCRICAO" value={user.DESCRICAO} onChange={handleInputChange} />  </Col>
         
          <Col>Dpto     
              <Select class="form-select"  
                      style={{ width: 200 }} 
                      onChange={handleChange} 
                      >
                <option value="1">TECNOLOGIA	</option>
                <option value="2">FISCAL		</option>
                <option value="3">CONTABIL		</option>
                <option value="4">VENDAS		</option>
                <option value="5">POS-VENDAS	</option>
              </Select></Col>
          

          <Col>Ativo         
              <Select class="form-select" style={{ width: 200 }} onChange={handleChangeAtivo}>
                <option value="S" selected>ATIVO	</option>
                <option value="N">DESATIVADO</option>
              </Select>
          </Col>
          <Col>Email         
              <Select class="form-select" style={{ width: 200 }} onChange={handleChangeEmail}>
                <option value="S" selected>SIM	</option>
                <option value="N">NAO</option>
              </Select>
          </Col>
          <Col>Alerta         
              <Select class="form-select" style={{ width: 200 }} onChange={handleChangeAlerta}>
              <option value="S" selected>SIM	</option>
                <option value="N">NAO</option>
              </Select>
          </Col>
      </Row>
      <Row xs={2} md={4} lg={1}> 
      Query SQL<textarea class="form-control" 
                          type="text" 
                          name="SQL" 
                          value={user.SQL} 
                          rows="15" cols="40" maxlength="1000"
                          onChange={handleInputChange} />
      </Row> 
       
      <button class="btn btn-outline-success"
         
      >Update</button>
      <button class="btn btn-outline-danger" 
              onClick={ () => props.setEditing(false)                       
                      } 
              >  Cancel  </button>
    </form>
    </Container>
    </div>
  )
}

export default EditUserForm
