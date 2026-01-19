
import Carrot from './Minecraft/carrot.png'
import Coal_ore from './Minecraft/coal_ore.png'
import Copper_ore from './Minecraft/copper_ore.png'
import Crafting_table from './Minecraft/crafting_table.png'
import Crimson_Nylium from './Minecraft/Crimson_Nylium.png'
import Diamond from './Minecraft/diamond.png'
import Water from './Minecraft/water.png'
import Wheat from './Minecraft/wheat.png'
import Wooden_plank from './Minecraft/wooden_plank.png'

import Item from './item.jsx'

function ingred() {

  return (
    <>

      <Item image={Carrot} label="Carrot" />
      <Item image={Coal_ore} label="Coal Ore" />
      <Item image={Copper_ore} label="Copper Ore" />
      <Item image={Crafting_table} label="Crafting Table" />
      <Item image={Crimson_Nylium} label="Crimson Nylium" />
      <Item image={Diamond} label="Diamond" />
      <Item image={Water} label="Water" />
      <Item image={Wheat} label="Wheat" />
      <Item image={Wooden_plank} label="Oak Planks" />
    </>
  )
}


export default ingred;
