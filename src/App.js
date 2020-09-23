import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, fetchTodos } from "./redux/actions/todos";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
};

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  if (!todos.length) {
    return <p>No Todos</p>;
  }
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}{" "}
          <button
            style={{ color: "red", marginBottom: "5px" }}
            onClick={() => deleteTodoHandler(todo.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <>
      <TodoInput />
      <Todos />
    </>
  );
};

export default App;
