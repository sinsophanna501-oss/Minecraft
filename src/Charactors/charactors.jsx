import React, { useState, useEffect } from "react";
import "./charactors.css";
import Tag_name from "./tag_name";
import Steve from '../components/Minecraft/Lego_Steve.png'
import Alex from '../components/Minecraft/Lego_Alex.png'
import Zombie from '../components/Minecraft/Lego_Zombie.png'
import Zombie_PigMan from '../components/Minecraft/Lego_Zombie_PigMan.png'
import Click from '../components/sound/Click_stereo.ogg.mp3'

function charactors() {
  const charactors = [
    {
      image:
        "https://onlinepngtools.com/images/examples-onlinepngtools/empty-transparent.png",
      Name: 'none',
      Gender: 'none',
      Story: 'none',
    },
    {
      image:
        "https://onlinepngtools.com/images/examples-onlinepngtools/empty-transparent.png",
      Name: 'none',
      Gender: 'none',
      Story: 'none',
    },
    {
      image: Steve,
      Name: 'Steve',
      Gender: 'Male ',
      GenderColor : '#02a2ffff',
      GenderSymbol : '♂',
      Story: 'Steve is one of the nine default skins players can use in Minecraft, and the first to be introduced.',
    },
    {
      image: Alex,
      Name: 'Alex',
      Gender: 'Female ',
      GenderColor: '#ff52b4ff',
      GenderSymbol : '♀',
      Story: 'Alex is one of the nine default skins players can use in Minecraft, and the second to be introduced, commonly seen with Steve. ',
    },
    {
      image: Zombie,
      Name: 'Zombie Villager',
      Gender: 'non-gendered ',
      GenderColor: '#ba43ffff',
      GenderSymbol : '♥',
      Story: 'A zombie villager is a variant of the zombie that can be cured into a normal villager using a golden apple while it is under the effect of Weakness. ',
    },
    {
      image: Zombie_PigMan,
      Name: 'Zombie Pigman',
      Gender: 'Genderless ',
      GenderColor: '#fcf301',
      GenderSymbol : '☼ ',
      Story: 'Zombie Pigmen are a variation of zombies, (hence the name) who are neutral and are from The Nether.',
    },
    {
      image: Steve,
      Name: 'Steve',
      Gender: 'Male ',
      GenderColor : '#02a2ffff',
      GenderSymbol : '♂',
      Story: 'Steve is one of the nine default skins players can use in Minecraft, and the first to be introduced.',
    },
    {
      image: Alex,
      Name: 'Alex',
      Gender: 'Female ',
      GenderColor: '#ff52b4ff',
      GenderSymbol : '♀',
      Story: 'Alex is one of the nine default skins players can use in Minecraft, and the second to be introduced, commonly seen with Steve. ',
    },
    {
      image: Zombie,
      Name: 'Zombie Villager',
      Gender: 'non-gendered ',
      GenderColor: '#ba43ffff',
      GenderSymbol : '♥',
      Story: 'A zombie villager is a variant of the zombie that can be cured into a normal villager using a golden apple while it is under the effect of Weakness. ',
    },
    {
      image: Zombie_PigMan,
      Name: 'Zombie Pigman',
      Gender: 'Genderless ',
      GenderColor: '#fcf301',
      GenderSymbol : '☼ ',
      Story: 'Zombie Pigmen are a variation of zombies, (hence the name) who are neutral and are from The Nether.',
    },
    {
      image:
        "https://onlinepngtools.com/images/examples-onlinepngtools/empty-transparent.png",
      Name: 'none',
      Gender: 'none',
      Story: 'none',
    },
    {
      image:
        "https://onlinepngtools.com/images/examples-onlinepngtools/empty-transparent.png",
      Name: 'none',
      Gender: 'none',
      Story: 'none',
    },
  ];

  const [current, setCurrent] = useState(2);

  const handlePrev = () => {
    if (current > 2) {
      setCurrent(current - 1);
      const audio = new Audio(Click);
      audio.play();
    }
  };

  const handleNext = () => {
    if (current + 3 < charactors.length) {
      setCurrent(current + 1);
      const audio = new Audio(Click);
      audio.play();
    }
  };
  useEffect(() => {
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");

    // Reset to defaults ( CSS handle default look)
    leftBtn.style.backgroundColor = "";
    leftBtn.style.color = "";
    leftBtn.style.border = "";
    rightBtn.style.backgroundColor = "";
    rightBtn.style.border = "";
    rightBtn.style.color = "";

    if (current == 2) {
      leftBtn.style.backgroundColor = "#8b8b8b";
      leftBtn.style.color = "white";
      leftBtn.style.border = "3px inset black";
    }
    if(current == charactors.length - 3){
      rightBtn.style.backgroundColor = "#8b8b8b";
      rightBtn.style.color = "white";
      rightBtn.style.border = "3px inset black";       
    }
  }, [current]);
  return (
    <>
      <div className="choosing_charactor_and_info">
        <div className="background_charactor">
          <img src={charactors[current - 2].image} alt="" id="small_size" />
          <img src={charactors[current - 1].image} alt="" id="medium_size" />
          <div className="outside_button">
            <div className="next_button" id="left" onClick={handlePrev}>
              &lt;
            </div>
          </div>
          <div className="main_charactor">
            <img src={charactors[current].image} alt="" id="charactor" />
          </div>
          <div className="outside_button">
            <div className="next_button" id="right" onClick={handleNext}>
              &gt;
            </div>
          </div>
          <img src={charactors[current + 1].image} alt="" id="medium_size" />
          <img src={charactors[current + 2].image} alt="" id="small_size" />
        </div>
        <Tag_name
          Name = {charactors[current].Name}
          Gender = {charactors[current].Gender}
          GenderColor = {charactors[current].GenderColor}
          GenderSymbol = {charactors[current].GenderSymbol}
          Story = {charactors[current].Story}
        />
      </div>
    </>
  );
}

export default charactors;
