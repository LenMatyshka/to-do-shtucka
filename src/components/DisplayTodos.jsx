import React, { useState } from "react";
import { connect } from "react-redux";
import {
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const DisplayTodos = ({ todos, removeTodo, updateTodo, completeTodo }) => {
  const [filter, setFilter] = useState("active");

  const getFilteredTodos = () => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  };

  const filtered = getFilteredTodos();

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setFilter("active")}>Активные</button>
        <button onClick={() => setFilter("completed")}>Завершённые</button>
        <button onClick={() => setFilter("all")}>Все</button>
      </div>
      <ul>
        {filtered.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch(removeTodos(id)),
  updateTodo: (obj) => dispatch(updateTodos(obj)),
  completeTodo: (id) => dispatch(completeTodos(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);