import React, { useState } from 'react';
import firebase from '../util/firebase';
import './Form.css';

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };
  return (
    <div>
      <hr />
      <input 
      type="text"
      onChange={handleOnChange} 
      value={title} 
      placeholder="insira uma tarefa a fazer"
      className="inputTodo"
      />
      <button onClick={createTodo} className="btn-Add-Todo">Adicionar Tarefa</button>
      <hr />
    </div>
  ); 
}