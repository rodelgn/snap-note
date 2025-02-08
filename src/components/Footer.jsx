import React from 'react'
import '../index.css'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div>
        <footer>
            <p>Copyright © {year} </p>
        </footer>
    </div>
  )
}

export default Footer