import React, { useState } from "react";

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

  // Write handleSubmit

  return (
    <>
      <section id="controls">
        <div className="step">
          <h1>To-Do App</h1>
        </div>
        {/* attach handleSubmit to onSubmit prop */}
        <form className="step" aria-label="form">
          <h4>Add a To-Do!</h4>
          {/* attach onChange handler */}
          <input type="text" placeholder="todo title" aria-label="title" />
          <label>
            {/* attach onChange handler */}
            <input type="checkbox" title="checkbox" aria-label="complete" />
            <small> Complete</small>
          </label>
          <button type="submit">Add ToDo</button>
        </form>
      </section>
      <section className="step" id="todos">
        {/* map over todos, rendering ToDo component, passing in todo prop */}
      </section>
    </>
  );
}

module.exports = App;
