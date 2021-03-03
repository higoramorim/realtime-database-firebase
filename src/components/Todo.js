import React from 'react';
import firebase from '../util/firebase';
import './Todo.css';

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div className="div-Todo">
      <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
      <button onClick={deleteTodo} className="btn-Todo">Delete</button>
      <button onClick={completeTodo} className="btn-Todo">Complete</button>
    </div>
  );
}