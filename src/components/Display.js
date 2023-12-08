import React from "react";
import "../styles/styles.css";
import InputForm from "./InputForm";
import NoteList from "./NoteList";
import notes2 from "../images/description 2.png";

function Display() {
  return (
    <div className="Display">
      <InputForm />
      <div className="ima_rec">
        <div className="image">
          <img src={notes2} alt="Notes" style={{ color: "blue" }} />
          <h3>My Notes</h3>
        </div>
        <p>Recently viewed</p>
      </div>
      <NoteList />
    </div>
  );
}

export default Display;
