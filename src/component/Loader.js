import React from 'react';
import Spin from '../spinner.gif';

export default function Loader() {
  return (
    <div className='text-center spin_area'>
      <img src={Spin} alt='Loading....'/>
    </div>
  )
}
