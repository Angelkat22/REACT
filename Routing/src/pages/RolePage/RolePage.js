import React from 'react'
import { useParams } from 'react-router-dom'
import UsersContainer from '../../Components/UsersContainer/UsersContainer'

function RolePage() {
const {role} = useParams()

  return (
    <div>
      <UsersContainer role ={role}/>
    </div>
  )
}

export default RolePage