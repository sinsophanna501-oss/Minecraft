import Crafting_table from './Minecraft/crafting_table.png'
import Crimson_Nylium from './Minecraft/Crimson_Nylium.png'
import Fungus from './Minecraft/fungus.png'
import Glass_bottle from './Minecraft/glass_bottle.png'
import Gold_ingot from './Minecraft/gold_ingot.png'
import Sculk from './Minecraft/sculk.png'
import Sculk_catalyst from './Minecraft/sculk_catalyst.png'
import Sculk_sensor from './Minecraft/sculk_sensor.png'
import Sculk_shrieker from './Minecraft/sculk_shrieker.png'
import Sculk_vein from './Minecraft/sculk_vein.png'
import Seed from './Minecraft/seed.png'

import Item from './item.jsx'

function food() {

  return (
    <>

      <Item image={Crafting_table} label="Crafting Table" />
      <Item image={Crimson_Nylium} label="Crimson Nylium" />
      <Item image={Fungus} label="Crimson Fungus" />
      <Item image={Glass_bottle} label="Glass Bottle" />
      <Item image={Gold_ingot} label="Gold Nugget" />
      <Item image={Sculk} label="Sculk" />
      <Item image={Sculk_catalyst} label="Sculk Catalyst" />
      <Item image={Sculk_sensor} label="Sculk Sensor" />
      <Item image={Sculk_shrieker} label="Sculk Shrieker" />
      <Item image={Sculk_vein} label="Sculk Vein" />
      <Item image={Seed} label="Wheat Seeds" />

    </>
  )
}


export default food;
