import React, { useState } from "react";
import ToDo from "./components/ToDo.js";

// import ToDo

function App() {
  const originalToDos = [
    {
      title: "Buy Bananas",
      complete: true,
    },
    {
      title: "Walk Dog",
      complete: false,
    },
  ];
  // Initialize state here

  const [todos, setTodos] = useState(originalToDos);
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);

  //   console.log(title)
  //   console.log(complete)

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleComplete(e) {
    setComplete(!complete);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, { title: title, complete: complete }]);

    setTitle("");
    setComplete(false);
  }

  return (
    <>
      <section id="controls">
        <div className="step">
          <h1>To-Do App</h1>
        </div>
        {/* attach handleSubmit to onSubmit prop */}
        <form className="step" aria-label="form" onSubmit={handleSubmit}>
          <h4>Add a To-Do!</h4>
          {/* attach onChange handler */}
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="todo title"
            aria-label="title"
          />
          <label>
            {/* attach onChange handler */}
            <input
              type="checkbox"
              title="checkbox"
              value={complete}
              onChange={handleComplete}
              aria-label="complete"
            />
            <small> Complete</small>
          </label>
          <button type="submit">Add ToDo</button>
        </form>
      </section>
      <section className="step" id="todos">
        {/* map over todos, rendering ToDo component, passing in todo prop */}
        {todos.map((todo, index) => (
          <ToDo key={index} todo={todo} />
        ))}
      </section>
    </>
  );
}

module.exports = App;
