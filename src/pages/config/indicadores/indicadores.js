import React, { useState, useEffect, Fragment } from 'react'
import AddUserForm 	from  '../indicadores/forms/AddUserForm'
import EditUserForm from '../indicadores/forms/EditUserForm'
import UserTable 	from '../indicadores/tables/UserTable'
import axios 		from 'axios' 
import '../usuarios/index.css'



const Usuarios = () => { 
	const initialFormState = { 	ID: null, 
								DESCRICAO: '',
								DPTO: '', 
								IMAGEM: '',
								ENVIA_EMAIL: '',
								ENVIA_ALERTA: '',	
								SQL: '',							
								}

	// Setting state
	const [ users, setUsers ] = useState([])
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	useEffect(async ()=>  {
        axios.get (`http://localhost:8000/indicadores`)   
            .then(res=>{
                const dadosusuario=res.data
                setUsers(dadosusuario) 
            })          
    },[])	
	  

	// CRUD operations
	const addUser = user => {
		user.ID = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = ID => {
		setEditing(false)
		setUsers(users.filter(user => user.ID !== ID))

		var config = {
			method: 'delete',
			url: `http://localhost:8000/indicadores/${ID}`,
			headers: { }		
		  };
		  
		  axios(config)
		  .then(function (response) {
			console.log(JSON.stringify(response.data));
		  })
		  .catch(function (error) {
			console.log(error);
		  });


	}

	const updateUser = (ID, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.ID === ID ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ 	ID: user.ID, 
							DPTO: user.DPTO,
							DESCRICAO: user.DESCRICAO, 
							IMAGEM: user.IMAGEM,
							ENVIA_EMAIL: user.ENVIA_EMAIL,
							ENVIA_ALERTA: user.ENVIA_ALERTA,
							ATIVO: user.ATIVO,
							SQL: user.SQL,
						 })
	}

	return (
		<div className="container"> 
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Editar Indicador</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Novo Indicador</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">				
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default Usuarios