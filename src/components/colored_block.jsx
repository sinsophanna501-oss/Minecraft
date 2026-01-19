
import Carrot from './Minecraft/carrot.png'
import Coal_ore from './Minecraft/coal_ore.png'
import Copper_ore from './Minecraft/copper_ore.png'
import Crafting_table from './Minecraft/crafting_table.png'
import Crimson_Nylium from './Minecraft/Crimson_Nylium.png'
import Diamond from './Minecraft/diamond.png'


import Item from './item.jsx'

function colored_block() {

  return (
    <>
      
      <Item image={Carrot} label="Carrot" />
      <Item image={Coal_ore} label="Coal Ore" />
      <Item image={Copper_ore} label="Copper Ore" />
      <Item image={Crafting_table} label="Crafting Table" />
      <Item image={Crimson_Nylium} label="Crimson Nylium" />
      <Item image={Diamond} label="Diamond" />
      
    </>
  )
}


export default colored_block;
