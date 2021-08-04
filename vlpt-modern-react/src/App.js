import React, { useState, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChane = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'noa',
      email: 'believer.noa@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'choco',
      email: 'believer.choco@gmail.com',
      active: true
    },
    {
      id: 3,
      username: 'durun',
      email: 'believer.durun@gmail.com',
      active: true
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChane}
        onCreate={onCreate}
         />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
