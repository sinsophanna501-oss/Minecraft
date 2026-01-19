import React from 'react'
import './top_selection.css'
import Top from './top.jsx'
import { Link } from 'react-router'

function Top_selection() {
  return (
    <>
        <div className='output_top'>
         <Link to = "/inventory/building_block" className='no_underline'>
            <Top
               src="https://minecraft.wiki/images/thumb/Bricks_JE5_BE3.png/150px-Bricks_JE5_BE3.png?54bd8"
               text="Building Blocks"
               id="set1"
               backgroundcolor={{backgroundColor: "#c6c6c6"}}
               font = {{color: "black"}}
               border = {{border : "2px outset black"}}
            />
         </Link>
         <Link to = "/inventory/colored_block" className='no_underline'>
            <Top
               src="https://minecraft.wiki/images/thumb/Cyan_Wool_JE3_BE3.png/150px-Cyan_Wool_JE3_BE3.png?49522"
               text="Colored Blocks"
               id="set2"
               backgroundcolor={{backgroundColor: "#c6c6c6"}}
               font = {{color: "black"}}
               border = {{border : "2px outset black"}}
            />
         </Link>
         <Link to = "/inventory/natural_block" className='no_underline'>
            <Top
               src="https://minecraft.wiki/images/thumb/Grass_Block_JE7_BE6.png/150px-Grass_Block_JE7_BE6.png?8cc1b"
               text="Natural Blocks"
               id="set3"
               backgroundcolor={{backgroundColor: "#c6c6c6"}}
               font = {{color: "black"}}
               border = {{border : "2px outset black"}}
            />
         </Link>
         <Link to = "/inventory/functional_block" className='no_underline'>
            <Top
               src="https://minecraft.wiki/images/Invicon_Oak_Sign.png?45ec7"
               text="Functional Blocks"
               id="set4"
               backgroundcolor={{backgroundColor: "#c6c6c6"}}
               font = {{color: "black"}}
               border = {{border : "2px outset black"}}
            />
         </Link>
         <Link to = "/inventory/All" className='no_underline'>
            <Top
               src="https://minecraft.wiki/images/Compass_JE3_BE3.gif?0043f"
               text="All Blocks & Items"
               id="set5"
               backgroundcolor={{backgroundColor: "green"}}
               font = {{color: "white"}}
               border = {{border : "2px solid white"}}
            />
         </Link>
        </div>
    </>
  )
}

export default Top_selection