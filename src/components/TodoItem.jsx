import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = ({ item, updateTodo, removeTodo, completeTodo }) => {
  const inputRef = useRef(true);

  const enableEdit = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const handleUpdate = (id, value, e) => {
    if (e.key === "Enter") {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li className="card">
      <textarea
        ref={inputRef}
        disabled={true}
        defaultValue={item.item}
        onKeyPress={(e) => handleUpdate(item.id, e.target.value, e)}
      />
      <div className="btns">
        <button onClick={enableEdit}>
          <AiFillEdit />
        </button>
        {!item.completed && (
          <button
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button style={{ color: "red" }} onClick={() => removeTodo(item.id)}>
          <IoClose />
        </button>
      </div>
      {item.completed && <span className="completed">✓ Сделано</span>}
    </li>
  );
};

export default TodoItem;