import React from "react";

export const Todolist = ({ title, id, status, handletoggle, handledelete }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "auto",
        borderRadius: "10px",
        backgroundColor: "wheat",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      <h1 style={status ? { color: "green" } : { color: "blue" }}>{title}</h1>
      <p>Status: {status ? " Completed" : " Un Completed"}</p>
      <button onClick={() => handletoggle(id)}>
        {status ? "Un Completed" : "Completed"}
      </button>
      <button onClick={() => handledelete(id)}>Delete</button>
    </div>
  );
};
