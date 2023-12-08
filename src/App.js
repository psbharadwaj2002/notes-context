import React from "react";
import Display from "./components/Display";
import NotesContext from "./components/NotesContext";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editIndex, setEditIndex }}
    >
      <div className="App">
        <Sidebar />
        <Display />
      </div>
    </NotesContext.Provider>
  );
}

export default App;
