import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div>
        <h2>PAGE NOT FOUND</h2>
        <Link to={'/home'}>GO TO HOME</Link>
    </div>
  )
}

export default NotFound