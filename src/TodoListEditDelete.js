import { useState } from "react";
import "./styles.css";

const TodoListEditDelete = () => {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAdd = () => {
    setTodo([...todo, { id: Date.now(), text: todoText }]);
    setTodoText("");
  };

  const handlDelete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handlEdit = (todo) => {
    setEditingTodo(todo);
    setEditingText(todo.text);
  };

  const handlUpdate = () => {
    setTodo(
      todo.map((item) =>
        item.id === editingTodo.id ? { ...item, text: editingText } : item
      )
    );
    setEditingTodo(null);
    setEditingText("");
  };

  return (
    <>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {todo.map((item, id) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => handlEdit(item)}>Edit</button>
          <button onClick={() => handlDelete(item.id)}>Delete</button>
        </li>
      ))}

      {editingTodo && (
        <div>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={handlUpdate}>update</button>
        </div>
      )}
    </>
  );
};

export default TodoListEditDelete;
