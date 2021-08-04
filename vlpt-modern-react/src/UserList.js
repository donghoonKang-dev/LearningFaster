import React from 'react'

function User({ user }){
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}
export default function UserList() {
  const users = [
    {
      id: 1,
      username: 'noa',
      email: 'believer.noa@gmail.com'
    },
    {
      id: 2,
      username: 'choco',
      email: 'believer.choco@gmail.com'
    },
    {
      id: 3,
      username: 'durun',
      email: 'believer.durun@gmail.com'
    },
  ]
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}
