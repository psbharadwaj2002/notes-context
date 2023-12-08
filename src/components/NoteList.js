import React, { useContext } from "react";
import NotesContext from "./NotesContext";
import "../styles/styles.css";
import edit from "../images/edit.png";
import deleteimg from "../images/delete.png";

function NoteList() {
  const { notes, deleteNote, setEditIndex } = useContext(NotesContext);

  return (
    <div className="NoteList">
      {notes.map((note, index) => (
        <div key={index} className="note">
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          <div className="buttons">
            <button onClick={() => deleteNote(index)}>
              <img src={deleteimg} />
            </button>
            <button onClick={() => setEditIndex(index)}>
              <img src={edit} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
