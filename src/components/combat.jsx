import Ancient_debris from './Minecraft/ancient_debris.png'
import Apple from './Minecraft/apple.png'
import Baboo from './Minecraft/baboo.png'
import Brown_mush from './Minecraft/brown_mush.png'
import Cactus from './Minecraft/cactus.png'
import Gold_ingot from './Minecraft/gold_ingot.png'
import Gold_ore from './Minecraft/gold_ore.png'
import Hay from './Minecraft/hay.png'
import Lamp from './Minecraft/lamp.png'
import Posion from './Minecraft/possion.png'
import Ruby from './Minecraft/ruby.png'
import Sand from './Minecraft/sand.png'
import Wooden_plank from './Minecraft/wooden_plank.png'

import Item from './item.jsx'

function combat() {

  return (
    <>
      <Item image={Ancient_debris} label="Ancient Debris" />
      <Item image={Apple} label="Apple" />
      <Item image={Baboo} label="Bamboo" />
      <Item image={Brown_mush} label="Brown Mushroom" />
      <Item image={Cactus} label="Cactus" />
      <Item image={Gold_ingot} label="Gold Nugget" />
      <Item image={Gold_ore} label="Gold Ore" />
      <Item image={Hay} label="Hay Bale" />
      <Item image={Lamp} label="Lantern" />
      <Item image={Posion} label="Potion of Healing" />
      <Item image={Ruby} label="Ruby" />
      <Item image={Sand} label="Sand" />

      <Item image={Wooden_plank} label="Oak Planks" />
    </>
  )
}


export default combat;
