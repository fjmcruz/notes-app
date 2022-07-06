import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState(false);

  const [showEdit, setShowEdit] = useState(false);

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    // Append to current array.
    setNotes([newNote, ...notes]);
    // Set new note to active note.
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        setShowEdit={setShowEdit}
      />
      <Main
        activeNote={getActiveNote()}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
