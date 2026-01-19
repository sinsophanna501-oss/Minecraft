import React from 'react'
import Buttom from './buttom.jsx'
import './buttom_selection.css'
import { Link } from 'react-router'

function buttom_selection() {
  return (
    <>
        <div className='output_buttom'>
         <Link to = "/inventory/tool" className='no_underline'>
            <Buttom
               src="https://minecraft.wiki/images/Diamond_Pickaxe_JE3_BE3.png?7409d"
               text="Tools & Utilities"
               id = "set6"
            />
         </Link>
         <Link to = "/inventory/combat" className='no_underline' >
            <Buttom
               src="https://minecraft.wiki/images/Netherite_Sword_JE2_BE2.png?8e866"
               text="Combat"
               id = "set7"
            />
         </Link>
         <Link to = "/inventory/food" className='no_underline'>
            <Buttom
               src="https://minecraft.wiki/images/Golden_Apple_JE2_BE2.png?aa827"
               text="Food and Drinks"
               id = "set8"
            />
         </Link>
         <Link to = "/inventory/ingred" className='no_underline'>
            <Buttom
               src="https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png?849cb"
               text="Ingredients"
               id = "set9"
            />
         </Link>
         <Link to = "/inventory/egg" className='no_underline'>
            <Buttom
               src="https://minecraft.wiki/images/Creeper_Spawn_Egg_JE3_BE2.png?3c0c5"
               text="Spawn Eggs"
               id = "set10"
            />
         </Link>
         <Link to = "/inventory/operator" className='no_underline'>
            <Buttom
               src="https://minecraft.wiki/images/thumb/Impulse_Command_Block.gif/150px-Impulse_Command_Block.gif?fb024"
               text="Operator Utilities"
               id = "set11"
            />
         </Link>
        </div>
    </>
  )
}

export default buttom_selection