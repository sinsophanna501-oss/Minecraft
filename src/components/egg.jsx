import Ancient_debris from './Minecraft/ancient_debris.png'
import Apple from './Minecraft/apple.png'
import Baboo from './Minecraft/baboo.png'
import Crimson_Nylium from './Minecraft/Crimson_Nylium.png'
import Sculk_vein from './Minecraft/sculk_vein.png'
import Seed from './Minecraft/seed.png'
import Spawner from './Minecraft/spawner.png'

import Item from './item.jsx'

function egg() {

  return (
    <>
      <Item image={Ancient_debris} label="Ancient Debris" />
      <Item image={Apple} label="Apple" />
      <Item image={Baboo} label="Bamboo" />
      <Item image={Crimson_Nylium} label="Crimson Nylium" />
      <Item image={Sculk_vein} label="Sculk Vein" />
      <Item image={Seed} label="Wheat Seeds" />
      <Item image={Spawner} label="Monster Spawner" />

    </>
  )
}


export default egg;
