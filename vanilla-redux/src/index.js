import { createStore } from 'redux';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const ul = document.getElementById('todo-list');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  };
};

const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};
const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

const dispatchAddTodo = text => {
  store.dispatch(addTodo(text));
};
const dispatchDeleteTodo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.type = 'button';
    btn.addEventListener('click', dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const store = createStore(reducer);
store.subscribe(paintTodos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  if (toDo === '') {
    alert('내용을 입력해야지');
  } else {
    input.value = '';
    dispatchAddTodo(toDo);
  }
}

form.addEventListener("submit", onSubmit);