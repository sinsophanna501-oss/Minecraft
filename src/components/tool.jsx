import Ancient_debris from './Minecraft/ancient_debris.png'
import Apple from './Minecraft/apple.png'
import Baboo from './Minecraft/baboo.png'
import Brown_mush from './Minecraft/brown_mush.png'
import Diamond from './Minecraft/diamond.png'
import Dirt_grass from './Minecraft/dirt_grass.png'
import Posion from './Minecraft/possion.png'
import Ruby from './Minecraft/ruby.png'
import Sand from './Minecraft/sand.png'
import Sculk from './Minecraft/sculk.png'
import Sculk_catalyst from './Minecraft/sculk_catalyst.png'
import Sculk_sensor from './Minecraft/sculk_sensor.png'
import Wheat from './Minecraft/wheat.png'
import Wooden_plank from './Minecraft/wooden_plank.png'

import Item from './item.jsx'

function tool() {

  return (
    <>
      <Item image={Ancient_debris} label="Ancient Debris" />
      <Item image={Apple} label="Apple" />
      <Item image={Baboo} label="Bamboo" />
      <Item image={Brown_mush} label="Brown Mushroom" />
      <Item image={Diamond} label="Diamond" />
      <Item image={Dirt_grass} label="Grass Block" />
      <Item image={Posion} label="Potion of Healing" />
      <Item image={Ruby} label="Ruby" />
      <Item image={Sand} label="Sand" />
      <Item image={Sculk} label="Sculk" />
      <Item image={Sculk_catalyst} label="Sculk Catalyst" />
      <Item image={Sculk_sensor} label="Sculk Sensor" />
      <Item image={Wheat} label="Wheat" />
      <Item image={Wooden_plank} label="Oak Planks" />
    </>
  )
}


export default tool;
