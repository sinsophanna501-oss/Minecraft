import End_portal_frame from './Minecraft/end_portal_frame.png'
import Ender_pearl from './Minecraft/ender_pearl.png'
import Fish from './Minecraft/fish.png'
import Sculk from './Minecraft/sculk.png'
import Sculk_catalyst from './Minecraft/sculk_catalyst.png'
import Sculk_sensor from './Minecraft/sculk_sensor.png'
import Sculk_shrieker from './Minecraft/sculk_shrieker.png'
import Sculk_vein from './Minecraft/sculk_vein.png'

import Item from './item.jsx'

function operator() {

  return (
    <>
      <Item image={End_portal_frame} label="End Portal Frame" />
      <Item image={Ender_pearl} label="Eye of Ender" />
      <Item image={Fish} label="Tropical Fish" />
      <Item image={Sculk} label="Sculk" />
      <Item image={Sculk_catalyst} label="Sculk Catalyst" />
      <Item image={Sculk_sensor} label="Sculk Sensor" />
      <Item image={Sculk_shrieker} label="Sculk Shrieker" />
      <Item image={Sculk_vein} label="Sculk Vein" />
    </>
  )
}


export default operator;
