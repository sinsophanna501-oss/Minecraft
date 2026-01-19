import Ancient_debris from './Minecraft/ancient_debris.png'
import Apple from './Minecraft/apple.png'
import Baboo from './Minecraft/baboo.png'
import Brown_mush from './Minecraft/brown_mush.png'
import Cactus from './Minecraft/cactus.png'
import Campass from './Minecraft/campass.png'
import Carrot from './Minecraft/carrot.png'
import Coal_ore from './Minecraft/coal_ore.png'
import Copper_ore from './Minecraft/copper_ore.png'
import Crafting_table from './Minecraft/crafting_table.png'
import Crimson_Nylium from './Minecraft/Crimson_Nylium.png'
import Diamond from './Minecraft/diamond.png'
import Dirt_grass from './Minecraft/dirt_grass.png'
import Dispenser from './Minecraft/dispenser.png'
import End_portal_frame from './Minecraft/end_portal_frame.png'
import Ender_pearl from './Minecraft/ender_pearl.png'
import Fish from './Minecraft/fish.png'
import Fungus from './Minecraft/fungus.png'
import Glass_bottle from './Minecraft/glass_bottle.png'
import Gold_ingot from './Minecraft/gold_ingot.png'
import Gold_ore from './Minecraft/gold_ore.png'
import Hay from './Minecraft/hay.png'
import Lamp from './Minecraft/lamp.png'
import Posion from './Minecraft/possion.png'
import Ruby from './Minecraft/ruby.png'
import Sand from './Minecraft/sand.png'
import Sculk from './Minecraft/sculk.png'
import Sculk_catalyst from './Minecraft/sculk_catalyst.png'
import Sculk_sensor from './Minecraft/sculk_sensor.png'
import Sculk_shrieker from './Minecraft/sculk_shrieker.png'
import Sculk_vein from './Minecraft/sculk_vein.png'
import Seed from './Minecraft/seed.png'
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
import { useEffect, useState } from 'react'

const API_BASE_URL_ITEM = "https://minecraft-api.vercel.app/api/items";
const API_BASE_URL_BLOCK = "https://minecraft-api.vercel.app/api/blocks";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json"
  },
};

function All_item() {
  const [itemList, setItemList] = useState([]);

  const fetchItems = async () => {


    try {
      
      /* Items Fetch */
      const responseItems = await fetch(API_BASE_URL_ITEM, API_OPTIONS);
      if (!responseItems.ok) {
        throw new Error("Failed to load data");
      }

      const dataItems = await responseItems.json();
      console.log(dataItems[0]);

      if (dataItems.responseItems === "False") {
        
        setItemList([]);
        return;
      }

      //Add Items data
      setItemList(dataItems || []);

      /* Blocks Fetch */
      const responseBlocks = await fetch(API_BASE_URL_BLOCK, API_OPTIONS);

      const dataBlocks = await responseBlocks.json();
      console.log(dataBlocks[0]);

      if (dataBlocks.responseItems === "False") {
        
        setItemList([]);
        return;
      }
      
      //Append Blocks data
      setItemList(previtemList => [...previtemList, dataBlocks]);
    } catch (error) {
      console.error(`Error message ${error}`);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
    
      {itemList.map((item)=> (
        <Item image={item.image} label={item.name} />
      ))}
      {/* <Item image={Ancient_debris} label="Ancient Debris" />
      <Item image={Apple} label="Apple" />
      <Item image={Baboo} label="Bamboo" />
      <Item image={Brown_mush} label="Brown Mushroom" />
      <Item image={Cactus} label="Cactus" />
      <Item image={Campass} label="Compass" />
      <Item image={Carrot} label="Carrot" />
      <Item image={Coal_ore} label="Coal Ore" />
      <Item image={Copper_ore} label="Copper Ore" />
      <Item image={Crafting_table} label="Crafting Table" />
      <Item image={Crimson_Nylium} label="Crimson Nylium" />
      <Item image={Diamond} label="Diamond" />
      <Item image={Dirt_grass} label="Grass Block" />
      <Item image={Dispenser} label="Dispenser" />
      <Item image={End_portal_frame} label="End Portal Frame" />
      <Item image={Ender_pearl} label="Eye of Ender" />
      <Item image={Fish} label="Tropical Fish" />
      <Item image={Fungus} label="Crimson Fungus" />
      <Item image={Glass_bottle} label="Glass Bottle" />
      <Item image={Gold_ingot} label="Gold Nugget" />
      <Item image={Gold_ore} label="Gold Ore" />
      <Item image={Hay} label="Hay Bale" />
      <Item image={Lamp} label="Lantern" />
      <Item image={Posion} label="Potion of Healing" />
      <Item image={Ruby} label="Ruby" />
      <Item image={Sand} label="Sand" />
      <Item image={Sculk} label="Sculk" />
      <Item image={Sculk_catalyst} label="Sculk Catalyst" />
      <Item image={Sculk_sensor} label="Sculk Sensor" />
      <Item image={Sculk_shrieker} label="Sculk Shrieker" />
      <Item image={Sculk_vein} label="Sculk Vein" />
      <Item image={Seed} label="Wheat Seeds" />
      <Item image={Spawner} label="Monster Spawner" />
      <Item image={Stone} label="Stone" />
      <Item image={Stone_bricks} label="Stone Bricks" />
      <Item image={Sugar_cane} label="Sugar Cane" />
      <Item image={Torch} label="Torch" />
      <Item image={TorchN} label="Soul Torch" />
      <Item image={Tree_leaves} label="Leaves" />
      <Item image={Water} label="Water" />
      <Item image={Wheat} label="Wheat" />
      <Item image={Wooden_plank} label="Oak Planks" /> */}
    </>
  )
}


export default All_item;
