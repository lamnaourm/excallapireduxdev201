import React from 'react'
import { useSelector } from 'react-redux'

export default function ListUsers() {

    const users = useSelector(state => state.users.users)
  return (
    <div>
        {users.map(u =>
            <h1>{u.title}</h1>
            )}
    </div>
  )
}
