import React from 'react'
import Header from './header.jsx'
import Body from './body.jsx'
import Buttom from './buttom.jsx'
import './home.css'

function home() {
  return (
    <div>
      <div className='background_home'>
        <div className='table_description'>
          <Header/>
          <Body/>
          <Buttom/>
        </div>
        </div>
    </div>
  )
}

export default home