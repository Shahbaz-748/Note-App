import React from "react";

function Note(props) {
  return (
    <div className="container-note">
      <h1>{props.uval}</h1>

      <p>{props.lval}</p>

      <button
        className="delete"
        onClick={() => {
          props.onPress(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
