
import Glass_bottle from './Minecraft/glass_bottle.png'
import Gold_ingot from './Minecraft/gold_ingot.png'
import Gold_ore from './Minecraft/gold_ore.png'
import Hay from './Minecraft/hay.png'
import Lamp from './Minecraft/lamp.png'
import Posion from './Minecraft/possion.png'
import Ruby from './Minecraft/ruby.png'
import Sand from './Minecraft/sand.png'

import Item from './item.jsx'

function functional_block() {

  return (
    <>
      
      <Item image={Glass_bottle} label="Glass Bottle" />
      <Item image={Gold_ingot} label="Gold Nugget" />
      <Item image={Gold_ore} label="Gold Ore" />
      <Item image={Hay} label="Hay Bale" />
      <Item image={Lamp} label="Lantern" />
      <Item image={Posion} label="Potion of Healing" />
      <Item image={Ruby} label="Ruby" />
      <Item image={Sand} label="Sand" />
      
    </>
  )
}


export default functional_block;
