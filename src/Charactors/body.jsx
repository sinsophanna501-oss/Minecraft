import React from 'react'
import './body.css'
import Choosing_char from './charactors.jsx'

function body() {
  return (
    <div>
        <div className='body'>
            <div className='side'>
            </div>
            <div className='middle'>
                <Choosing_char/>
            </div>
            <div className='side'>

            </div>
        </div>
    </div>
  )
}

export default body