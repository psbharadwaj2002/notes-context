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

  const handleSave = () => {
    if (title && description) {
      if (editIndex === null) {
        // If not in edit mode, add a new note
        addNote({ title, description });
      } else {
        // If in edit mode, update the existing note
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = { title, description };
        setNotes(updatedNotes);
        setEditIndex(null);
      }

      // Clear the fields after adding/editing
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
      <button onClick={handleSave}>{editIndex !== null ? "+" : "+"}</button>
    </div>
  );
}

export default InputForm;
