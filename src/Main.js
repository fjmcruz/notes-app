import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function Main({ activeNote, showEdit, setShowEdit, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  const onEdit = () => {
    if (!showEdit) {
      setShowEdit(true);
    } else {
      setShowEdit(false);
    }
  };

  if (!activeNote) {
    return <div className="no-active-note">No note selected.</div>;
  } else if (!showEdit) {
    return (
      <div className="app-main-note-preview">
        <div className="title-bar">
          <h1>{activeNote.title}</h1>
          <button onClick={onEdit}>Edit</button>
        </div>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <div className="app-main-note-edit">
      <input
        type="text"
        id="title"
        value={activeNote.title}
        onChange={(e) => onEditField("title", e.target.value)}
        autoFocus
      />
      <textarea
        id="body"
        value={activeNote.body}
        onChange={(e) => onEditField("body", e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={onEdit}>Save</button>
    </div>
  );
}

export default Main;
