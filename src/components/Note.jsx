import React from 'react';
import '../index.css'

const Note = (props) => {

    function handleDelete() {
        props.onDelete(props.id)
    }

  return (
    <div className='note-container'>
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Note