import React, { useState, useContext, useEffect } from "react";
import NotesContext from "./NotesContext";
import "../styles/styles.css";

function InputForm() {
  const { addNote, editIndex, setEditIndex, notes, setNotes } =
    useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Use useEffect to set the initial values when editing a note
  useEffect(() => {
    if (editIndex !== null && notes.length > 0) {
      const { title: noteTitle, description: noteDescription } =
        notes[editIndex];
      setTitle(noteTitle);
      setDescription(noteDescription);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editIndex, notes]);

  // to save, if we are saving for 1st time, then we will directly push to store,
  // else we will pass the index which needs to be edited, then we will edit it and will return the result
  const handleSave = () => {
    if (title && description) {
      if (editIndex === null) {
        addNote({ title, description });
      } else {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = { title, description };
        setNotes(updatedNotes);
        setEditIndex(null);
      }

      // clearing after adding/editing
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="input">
      <h1>{editIndex !== null ? "Edit Note" : "Add a Note"}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Take a note..."
      ></textarea>
      <button onClick={handleSave}>+</button>
    </div>
  );
}

export default InputForm;
