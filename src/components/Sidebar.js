import React from "react";
import "../styles/styles.css";
import notes from "../images/description.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h1>Notes App</h1>
      <button>
        <img src={notes} />
        Notes
      </button>
    </div>
  );
}

export default Sidebar;
