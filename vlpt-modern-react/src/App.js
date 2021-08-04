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
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChane}
        onCreate={onCreate}
         />
      <UserList users={users} />
    </>
  );
}

export default App;
