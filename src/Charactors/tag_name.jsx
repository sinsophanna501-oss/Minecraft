import React from 'react'
import './tag_name.css'
import './select_armor.css'
import './item.css'
import { useState } from 'react'

import full_armor_bar from './Armor_image/full.png'
import half_armor_bar from './Armor_image/half.png'
import empty_armor_bar from './Armor_image/empty.png'

import Leather from './sound/Equip_leather2.ogg.mp3'
import Gold from './sound/Equip_gold3.ogg.mp3'
import Iron from './sound/Equip_iron3.ogg.mp3'
import Diamond from './sound/Equip_diamond2.ogg.mp3'
import Netherite from './sound/Equip_netherite3.ogg.mp3'

import Empty_helmet from './Armor_image/empty_helmet.png'
import Empty_armor from './Armor_image/empty_armor.png'
import Empty_pant from './Armor_image/empty_pant.png'

import Leather_helmet from './Armor_image/leather_helmet.png'
import Golden_helmet from './Armor_image/gold_helmet.png'
import Iron_helmet from './Armor_image/iron_helmet.png'
import Diamond_helmet from './Armor_image/diamond_helmet.png'
import Netherite_helmet from './Armor_image/netherite_helmet.png' 

import Leather_armor from './Armor_image/leather_armor.png'
import Golden_armor from './Armor_image/gold_armor.png'
import Iron_armor from './Armor_image/iron_armor.png'
import Diamond_armor from './Armor_image/diamond_armor.png'
import Netherite_armor from './Armor_image/netherite_armor.png'

import Leather_pant from './Armor_image/leather_pant.png'
import Golden_pant from './Armor_image/gold_pant.png'
import Iron_pant from './Armor_image/iron_pant.png'
import Diamond_pant from './Armor_image/diamond_pant.png'
import Netherite_pant from './Armor_image/netherite_pant.png'

function tag_name({Name,Gender,Story,GenderColor,GenderSymbol}) {
  const [symbol,setSymbol] = useState({
     Option1: "^",
  });
// - You’re using React’s useState hook.
// - The state variable symbol is an object with three keys: Option1, Option2, Option3.
// - Each key starts with the string "^".
// - setSymbol is the function you call to update this state.

  const click_option = (id) =>{
    const option = document.getElementById(id);
    const select_table = document.getElementById("Select_Armor")

  
    if( option.style.backgroundColor === "rgb(139, 139, 139)" || option.style.backgroundColor === "#8b8b8b" ){     
      option.style.backgroundColor = "#c5c5c5"
      option.style.border = "3px outset black"
      option.style.color = "black"
      select_table.style.display = "none"

    }else{
      option.style.backgroundColor = "#8b8b8b"
      option.style.border = "3px inset black"
      option.style.color = "white" 
      select_table.style.display = "block"    
    }
    
    setSymbol((prev)=>({
      ...prev,
      [id]: prev[id] === "^" ? "v": "^"
    }))
// - setSymbol updates the state.
// - prev is the previous state object.
// - ...prev copies all the existing keys (Option1, Option2, Option3).
// - [id] means “update the property with the name of the clicked option”.
// - The value toggles:
//    - If it was "^", change it to "v".
//    - If it was "v", change it back to "^".

  }

  const [selectedHelmet,setSelectedhelmet] = useState(Empty_helmet);
  const [selectedArmor,setSelectedarmor] = useState(Empty_armor);
  const [selectedPant,setSelectedpant] = useState(Empty_pant);
  
  const audio_leather = new Audio(Leather);
  const audio_gold = new Audio(Gold);
  const audio_iron = new Audio(Iron);
  const audio_diamond = new Audio(Diamond);
  const audio_netherite = new Audio(Netherite);

    // DYNAMIC SETTER MAP
  const setterMap = {
    helmet: setSelectedhelmet,
    armor: setSelectedarmor,
    pant: setSelectedpant
  };

  // IMAGE MAPS
  const emptyImage = {
    helmet: Empty_helmet,
    armor: Empty_armor,
    pant: Empty_pant
  };

  const leatherImage = {
    helmet: Leather_helmet,
    armor: Leather_armor,
    pant: Leather_pant
  };

  const goldImage = {
    helmet: Golden_helmet,
    armor: Golden_armor,
    pant: Golden_pant
  };

  const ironImage = {
    helmet: Iron_helmet,
    armor: Iron_armor,
    pant: Iron_pant
  };

  const diamondImage = {
    helmet: Diamond_helmet,
    armor: Diamond_armor,
    pant: Diamond_pant
  };

  const netheriteImage = {
    helmet: Netherite_helmet,
    armor: Netherite_armor,
    pant: Netherite_pant
  };

  function sound(armor_type,id){
    const setter = setterMap[armor_type];
    if(armor_type+"1"===id){
      setter(emptyImage[armor_type]);
    }else if(armor_type+"2"===id){
      audio_leather.play();
      setter(leatherImage[armor_type]);
    }else if(armor_type+"3"===id){
      audio_gold.play();
      setter(goldImage[armor_type]);
    }else if(armor_type+"4"===id){
      audio_iron.play();
      setter(ironImage[armor_type]);
    }else if(armor_type+"5"===id){
      audio_diamond.play();
      setter(diamondImage[armor_type]);
    }else if(armor_type+"6"===id){
      audio_netherite.play();
      setter(netheriteImage[armor_type]);
    }
  }
  const clickHelmet = (id)=>{
    for(var i=1;i<=6;i++){
      const number = "helmet" + i;
      const helmet = document.getElementById(number);
      if(number===id){
        helmet.style.backgroundColor = "#d6d6d6";
      }else{
        helmet.style.backgroundColor = "#8b8b8b";
      }
    } 
    sound('helmet',id);
  }
  const clickArmor = (id)=>{
    for(var i=1;i<=6;i++){
      const number = "armor" + i;
      const armor = document.getElementById(number);
      if(number===id){
        armor.style.backgroundColor = "#d6d6d6";
      }else{
        armor.style.backgroundColor = "#8b8b8b";
      }
    }
    sound('armor',id);
  }
  const clickPant = (id)=>{
    for(var i=1;i<=6;i++){
      const number = "pant" + i;
      const pant = document.getElementById(number);
      if(number===id){
        pant.style.backgroundColor = "#d6d6d6";
      }else{
        pant.style.backgroundColor = "#8b8b8b";
      }
    }
    sound('pant',id);
  }
  return (
    <div>
        <div className='tag_name'>
          <div className='header_name'>
              Information
          </div>
          <div className='body_name'>
            <div className='side_name'>
            </div>
            <div className='info'>
              <div className='info_name'>
                <div>
                  <div>
                    <b>+ Name : </b><p>{Name}</p>
                  </div>
                  <div>
                    <b>+ Gender : </b><p style={{color:GenderColor}}>{Gender}</p><p className='GenderSymbol' style={{color:GenderColor}}>{GenderSymbol}</p>
                  </div>
                  <div>
                    <b>+ Story : </b><p>{Story}</p>
                  </div>
                </div>
              </div>
              <div className='armor'>
                <div className='armor_bar'>
                  <img src={full_armor_bar} alt="" />
                  <img src={full_armor_bar} alt="" />
                  <img src={full_armor_bar} alt="" />
                  <img src={full_armor_bar} alt="" />
                  <img src={full_armor_bar} alt="" />
                  <img src={full_armor_bar} alt="" />
                  <img src={half_armor_bar} alt="" />
                  <img src={half_armor_bar} alt="" />
                  <img src={empty_armor_bar} alt="" />
                  <img src={empty_armor_bar} alt="" />
                </div>
                <div className='armor_slot'>
                  <div className='empty_Slots'>
                    <div className='empty_Slot'>
                      <div className='helmet_choose'>
                        <img src={selectedHelmet} alt=""/>
                      </div>
                    </div>
                    <div className='empty_Slot'>
                      <div className='armor_choose'>  
                        <img src={selectedArmor} alt=""/>
                      </div>
                    </div>
                    <div className='empty_Slot'>
                      <div className='pant_choose'>                       
                        <img src={selectedPant} alt=""/>
                      </div>
                    </div>
                  </div>
                  <div className='select_armor'>
                    <div className='main_option'>
                      <div className='main_option_inside' onClick={()=>click_option("Option1")} id="Option1">{symbol.Option1}</div>
                      <div id='Select_Armor'>
                          <div className='table_list'>
                            <div className='item_list'>
                              <div className="item" id="helmet1" onClick={()=>clickHelmet("helmet1")}>
                                <div className="helmet_list">
                                  <img src={Empty_helmet} alt="" />
                                </div>
                              </div>

                              <div className="item" id="armor1"  onClick={()=>clickArmor("armor1")}>
                                <div className="armor_list">
                                  <img src={Empty_armor} alt="" />
                                </div>
                              </div>

                              <div className="item" id="pant1"  onClick={()=>clickPant("pant1")}>
                                <div className="pant_list">
                                  <img src={Empty_pant} alt="" />
                                </div>
                              </div>

                              <div className="item" id="helmet2" onClick={()=>clickHelmet("helmet2")}>
                                <div className="helmet_list">
                                  <img src={Leather_helmet} alt="" />
                                </div>
                              </div>

                              <div className="item" id="armor2"  onClick={()=>clickArmor("armor2")}>
                                <div className="armor_list">
                                  <img src={Leather_armor} alt="" />
                                </div>
                              </div>

                              <div className="item" id="pant2"  onClick={()=>clickPant("pant2")}>
                                <div className="pant_list">
                                  <img src={Leather_pant} alt="" />
                                </div>
                              </div>

                              <div className="item" id="helmet3" onClick={()=>clickHelmet("helmet3")}>
                                <div className="helmet_list">
                                  <img src={Golden_helmet} alt="" />
                                </div>
                              </div>

                              <div className="item" id="armor3"  onClick={()=>clickArmor("armor3")}>
                                <div className="armor_list">
                                  <img src={Golden_armor} alt="" />
                                </div>
                              </div>

                              <div className="item" id="pant3"  onClick={()=>clickPant("pant3")}>
                                <div className="pant_list">
                                  <img src={Golden_pant} alt="" />
                                </div>
                              </div>

                              <div className="item" id="helmet4" onClick={()=>clickHelmet("helmet4")}>
                                <div className="helmet_list">
                                  <img src={Iron_helmet} alt="" />
                                </div>
                              </div>

                              <div className="item" id="armor4"  onClick={()=>clickArmor("armor4")}>
                                <div className="armor_list">
                                  <img src={Iron_armor} alt="" />
                                </div>
                              </div>

                              <div className="item" id="pant4"  onClick={()=>clickPant("pant4")}>
                                <div className="pant_list">
                                  <img src={Iron_pant} alt="" />
                                </div>
                              </div>

                              <div className="item" id="helmet5" onClick={()=>clickHelmet("helmet5")}>
                                <div className="helmet_list">
                                  <img src={Diamond_helmet} alt="" />
                                </div>
                              </div>

                              <div className="item" id="armor5"  onClick={()=>clickArmor("armor5")}>
                                <div className="armor_list">
                                  <img src={Diamond_armor} alt="" />
                                </div>
                              </div>

                              <div className="item" id="pant5"  onClick={()=>clickPant("pant5")}>
                                <div className="pant_list">
                                  <img src={Diamond_pant} alt="" />
                                </div>
                              </div>

                              <div className="item" id="helmet6" onClick={()=>clickHelmet("helmet6")}>
                                <div className="helmet_list">
                                  <img src={Netherite_helmet} alt="" />
                                </div>
                              </div>

                              <div className="item" id="armor6"  onClick={()=>clickArmor("armor6")}>
                                <div className="armor_list">
                                  <img src={Netherite_armor} alt="" />
                                </div>
                              </div>

                              <div className="item" id="pant6"  onClick={()=>clickPant("pant6")}>
                                <div className="pant_list">
                                  <img src={Netherite_pant} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='side_name'>
            </div>
          </div>
          <div className='buttom_name'>
          </div>
        </div>
    </div>
  )
}

export default tag_name