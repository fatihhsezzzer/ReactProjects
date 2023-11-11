import React from "react";
import { useState } from "react";


function Note() {
  const [newTitle, setNewTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState();
  const [mode, setMode] = useState("add");

  const newNote = () => {
    if (newTitle && desc) {
      setId(id + 1);
      setNotes([...notes, { id: id, title: newTitle, desc: desc }]);
      setNewTitle("");
      setDesc("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((i) => i.id !== id));
  };

  const editNote = (i) => {
    setNewTitle(i.title);
    setDesc(i.desc);
    setEditId(i.id);
    setMode("edit");
  };

  const updateNote = () => {
    const newNotes = notes.map((i) => {
      return i.id === editId ? { title: newTitle, desc: desc, id: editId } : i;
    });
    setNotes(newNotes);
    setDesc("");
    setNewTitle("");
    setEditId("");
    setMode("add");
  };

  return (
    <div className="container mt-5">
      <div className="border p-4 text-center">
        <h2>Not Ekle</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label fs-5">
            Başlık
          </label>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            id="title"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label fs-5">
            Açıklama
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="description"
            className="form-control"
          />
        </div>

        {mode === "add" ? (
          <button className="btn btn-success" onClick={newNote}>
            Ekle
          </button>
        ) : (
          <button className="btn btn-primary" onClick={updateNote}>
            Güncelle
          </button>
        )}

        <h2 className="mt-4">Notlar</h2>
        {notes.map((i) => (
          <div className="card mb-3" key={i.id}>
            <div className="card-body">
              <h3 className="card-title fs-4">{i.title}</h3>
              <p className="card-text fs-5">{i.desc}</p>
              <button
                className="btn btn-danger me-2"
                onClick={() => deleteNote(i.id)}
              >
                Sil
              </button>
              <button
                className="btn btn-primary"
                onClick={() => editNote(i)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note;
