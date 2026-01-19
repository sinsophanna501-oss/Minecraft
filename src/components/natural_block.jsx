import Dirt_grass from './Minecraft/dirt_grass.png'
import Dispenser from './Minecraft/dispenser.png'
import End_portal_frame from './Minecraft/end_portal_frame.png'
import Ender_pearl from './Minecraft/ender_pearl.png'
import Fish from './Minecraft/fish.png'
import Fungus from './Minecraft/fungus.png'

import Item from './item.jsx'

function natural_block() {

  return (
    <>
      
      <Item image={Dirt_grass} label="Grass Block" />
      <Item image={Dispenser} label="Dispenser" />
      <Item image={End_portal_frame} label="End Portal Frame" />
      <Item image={Ender_pearl} label="Eye of Ender" />
      <Item image={Fish} label="Tropical Fish" />
      <Item image={Fungus} label="Crimson Fungus" />
      
    </>
  )
}


export default natural_block;
