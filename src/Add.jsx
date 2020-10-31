import React from "react";
import Note from "./Note";

function Add() {
  const [note, addNote] = React.useState({ title: "", note: "" });
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    addNote((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    setItems((prevItems) => {
      return [...prevItems, note];
    });

    addNote({
      title: "",
      note: ""
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="notes">
      <form className="create-note">
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
          value={note.title}
          className="title"
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Note"
          name="note"
          value={note.note}
          onChange={handleChange}
          className="note"
          autoComplete="off"
        />

        <button onClick={handleClick} className="add">
          +
        </button>
      </form>

      <div className="notess">
        {items.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              uval={item.title}
              lval={item.note}
              onPress={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Add;
