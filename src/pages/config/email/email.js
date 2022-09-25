import React, { useState, useEffect, Fragment } from 'react'
import AddUserForm from  '../email/forms/AddUserForm'
import EditUserForm from '../email/forms/EditUserForm'
import UserTable from '../email/tables/UserTable'
import axios from 'axios' 
import '../usuarios/index.css'



const Usuarios = () => { 
	const initialFormState = { ID: null, EMAIL: '', SENHA: '',HOST: '',PORT: '' }

	// Setting state
	const [ users, setUsers ] = useState([])
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	useEffect(async ()=>  {
        axios.get (`http://localhost:8000/email`)   
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
			url: `http://localhost:8000/email/${ID}`,
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

		setCurrentUser({ ID: user.ID, EMAIL: user.EMAIL, SENHA: user.SENHA, HOST: user.HOST,PORT: user.PORT  })
	}

	return (
		<div className="container"> 
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Editar Email</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Configurar E-mail de envio</h2>
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