import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";

const Todos = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo.trim() === "") {
      alert("Напишите что-нибудь!");
      return;
    }
    addTodo({
      id: Math.floor(Math.random() * 10000),
      item: todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo-input"
        placeholder="Что нужно сделать?"
      />
      <button className="add-btn" onClick={add}>
        <GoPlus />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(addTodos(obj)),
});

export default connect(null, mapDispatchToProps)(Todos);