import React from 'react'
import Choosing_char from './charactors.jsx'
import Header from './header.jsx'
import Body from './body.jsx'
import Buttom from './buttom.jsx'
import Tag_name from './tag_name.jsx'
import './main.charactor.css'

function main_charactors() {
  return (
    <div>
      <div className='container'>
        <div className='frame'>
          <Header/>      
          <Body/>
          <Buttom/>
        </div>
      </div>
    </div>
  )
}

export default main_charactors