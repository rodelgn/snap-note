import React, { useState} from 'react'
import '../index.css'

const Inputs = (props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  function expand() {
    setIsExpanded(true)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault()
    props.addNote(note)
    setNote({
      title: '',
      content: ''
    })
  }

  return (
    <div className='form-container'>
        <form action="" className='input-form'>
          {isExpanded && (
            <input type="text" placeholder="Title" onChange={handleChange} name='title' value={note.title} />
            )}
        <textarea placeholder="Write a Note" onClick={expand} rows={isExpanded ? 3: 1} onChange={handleChange} name='content' value={note.content} />
        <button onClick={handleClick}>Save</button>
        </form>
    </div>
  )
}

export default Inputs