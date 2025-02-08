import React, { useState } from 'react';
import './index.css'
import Header from './components/Header';
import Inputs from './components/Inputs';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([])

  function addNotes(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
    console.log(note)
  }

  function deleteNotes(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <Inputs addNote = {addNotes}/>
      {notes.map((note, index) => {
        return <Note id={index} key={index} title={note.title} content={note.content} 
        onDelete={deleteNotes}/>
      }
      )}
      
    </div>
  );
}

export default App;
