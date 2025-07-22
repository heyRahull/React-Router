import React from 'react'
import ErrorImage from './404.gif'
import { Link } from 'react-router'

const ErrorPage = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <p><Link to="/">Back to Home Page</Link> </p>
        <h1>Oops... The Page does not exist!</h1>
        <h2>Error : 404</h2>
        <img src={ErrorImage} alt="404 error image" />
    </div>
  )
}

export default ErrorPage