import React from "react";

function ToDo({ todo }) {
  // display todo data here
  return (
    <>
      <p className={todo.complete ? "complete" : ""}>{todo.title}</p>
    </>
  );
}
module.exports = ToDo;
