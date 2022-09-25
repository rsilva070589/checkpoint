import React from 'react'

const UserTable = props => (
   
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#ID</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Grupo</th>
        <th scope="col">DPTO</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr  key={user.ID}>
            <td scope="row">{user.ID}</td>
            <td>{user.NAME}</td>
            <td>{user.USERNAME}</td>
            <td>{user.ID_GRUPO}</td>
            <td>{user.DPTO}</td>
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
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
     
 

)

export default UserTable
