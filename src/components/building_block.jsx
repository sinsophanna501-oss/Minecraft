import Spawner from './Minecraft/spawner.png'
import Stone from './Minecraft/stone.png'
import Stone_bricks from './Minecraft/stone_bricks.png'
import Sugar_cane from './Minecraft/suger_cane.png'
import Torch from './Minecraft/torch.png'
import TorchN from './Minecraft/torchN.png'
import Tree_leaves from './Minecraft/tree_leave.png'
import Water from './Minecraft/water.png'
import Wheat from './Minecraft/wheat.png'
import Wooden_plank from './Minecraft/wooden_plank.png'

import Item from './item.jsx'

function building_block() {

  return (
    <>
      <Item image={Spawner} label="Monster Spawner" />
      <Item image={Stone} label="Stone" />
      <Item image={Stone_bricks} label="Stone Bricks" />
      <Item image={Sugar_cane} label="Sugar Cane" />
      <Item image={Torch} label="Torch" />
      <Item image={TorchN} label="Soul Torch" />
      <Item image={Tree_leaves} label="Leaves" />
      <Item image={Water} label="Water" />
      <Item image={Wheat} label="Wheat" />
      <Item image={Wooden_plank} label="Oak Planks" />
    </>
  )
}


export default building_block;