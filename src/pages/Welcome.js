import React, { Fragment } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Welcome = () => {
  return (
    <Fragment>
      <h1>This is the welcome page</h1>
      <Link to='new-user'>New User Link</Link>
      <Routes>
        <Route path="new-user" element={<p>Welcome, new User!</p>}/>
      </Routes>
    </Fragment>
  )
}

export default Welcome