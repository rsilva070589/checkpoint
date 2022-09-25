import React from 'react'

const UserTable = props => (
   
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#ID</th>        
        <th scope="col">DESCRICAO</th>
        <th scope="col">DPTO</th>
        <th scope="col">IMAGEM</th>
        <th scope="col">ENVIA_EMAIL</th>
        <th scope="col">ENVIA_ALERTA</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr  key={user.ID}>
            <td scope="row">{user.ID}</td>           
            <td>{user.DESCRICAO}</td>
            <td>{user.DPTO}</td>
            <td>{user.IMAGEM}</td>
            <td>{user.ENVIA_EMAIL}</td>
            <td>{user.ENVIA_ALERTA}</td>
            <td>
              <button class="btn btn-outline-secondary"
                onClick={() => {
                  props.editRow(user)
                }} 
              >
                Edit
              </button>
              <button class="btn btn-outline-danger"
                onClick={() => props.deleteUser(user.ID)}                
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Indicadores</td>
        </tr>
      )}
    </tbody>
  </table>
     
 

)

export default UserTable
