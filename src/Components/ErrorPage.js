import React from 'react'
import {Link} from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='error-page'>
        <h1>Opps... The Page you are looking is not Available</h1>
        <Link to={'/'}>Back to Home</Link>
    </div>
  )
}
