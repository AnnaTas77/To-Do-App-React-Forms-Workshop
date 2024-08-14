import React from "react";

function Button({ value, className }) {
  return <button className={className}>{value}</button>;
}

module.exports = Button;
