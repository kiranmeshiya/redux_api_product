import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Banner() {
  return (
    <div>
      <div className='banner'>
        <img src={require('../banner.jpg')} alt='' className='image'></img>
      </div>
    </div>
  )
}
