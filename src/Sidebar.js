import React from "react";

function Sidebar({
  notes,
  activeNote,
  setActiveNote,
  onAddNote,
  onDeleteNote,
  setShowEdit,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes:</h1>
        <button
          onClick={() => {
            onAddNote();
            setShowEdit(true);
          }}
        >
          +
        </button>
      </div>
      <div className="app-sidebar-notes">
        {/* Output sidebar note for each notes in the array. */}
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => {
              setActiveNote(note.id);
              setShowEdit(false);
            }}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.body && note.body.substring(0, 40) + "..."}</p>
            <small className="note-meta">
              Last modified:{" "}
              {new Date(note.lastModified).toLocaleDateString("en-PH", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
