import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Todo 1",
      desc: "This is my first todo",
    },
    {
      sno: 2,
      title: "Todo 2",
      desc: "This is my second todo",
    },
    {
      sno: 3,
      title: "Todo 3",
      desc: "This is my third todo",
    },
  ]);

  const onDelete = (todo) => {
    console.log("Delete button clicked", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("Adding this todo:", title, desc);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Navbar title="My Todo List" searchBar={false} />
      <div className="main-content">
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </div>
      <Footer />
    </>
  );
}

export default App;{APP.JS)
/* Main Container */
.main-content {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: purple;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

/* AddTodo Form Styling */
.todoform {
  background-color: violet;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: transform 0.3s ease;
}

.todoform:hover {
  transform: translateY(-5px);
}

.todoform .form-label {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.1em;
}

.todoform .form-control {
  border-radius: 5px;
  border: 2px solid black;
  padding: 10px;
  font-size: 1em;
  transition: border-color 0.3s ease;
}

.todoform .form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.todoform .btn-primary {
  background-color: red;
  border-color: black;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.todoform .btn-primary:hover {
  background-color: green;
}

/* Todos List Styling */
.todos-container {
  background-color: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.todos-container:hover {
  transform: translateY(-5px);
}

.todos-container h3 {
  border-bottom: 3px solid #007bff;
  padding-bottom: 15px;
  margin-bottom: 25px;
  color: #007bff;
  font-size: 1.5em;
  font-weight: bold;
}

.todo-item {
  padding: 15px;
  border: 2px solid #d1d9e6;
  border-radius: 10px;
  margin-bottom: 15px;
  transition: background-color 0.3s ease;
}

.todo-item:hover {
  background-color: #f9f9f9;
}

.todo-item h4 {
  margin-bottom: 10px;
  color: #495057;
  font-size: 1.2em;
  font-weight: bold;
}

.todo-item p {
  margin-bottom: 15px;
  color: #6c757d;
  font-size: 1em;
}

.todo-item .btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.todo-item .btn-danger:hover {
  background-color: #c82333;
}

.form-label{
  color: white;
}
.btn .btn-danger:hover{
text-decoration: underline;
background-color: greenyellow;
color: black;
}{app.css)
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();{index.js)
import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="todos-container">
      <h3 className="text">Todos List</h3>
      {todos.length === 0
        ? "No Todos to display"
        : todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />;
          })}
    </div>
  );
};

export default Todos;
{todos.js)
import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-danger"
        onClick={() => onDelete(todo)}
      >
        DELETE!
      </button>
    </div>
  );
};

export default TodoItem;{TodoItem.js}
import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          {props.searchBar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          ) : (
            " "
          )}
        </div>
      </div>
    </nav>
  );
}{Navbar.js}
import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">copyright &copy;MYTODOLIST.com</p>
    </footer>
  );
};

export default Footer;{Footer.js}
import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
      return;
    }
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="todoform">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};{AddTodo.js}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>TODO-LIST</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>{index.html}
