import React, { useState } from 'react';
import './headerTop.css'
import Creeper from './sound/Creeper_hurt1.ogg.mp3'
import Attack from './sound/Sweep_attack1.ogg.mp3'
import Ping from './sound/Successful_hit.ogg.mp3'
import CreeperNormal from './Minecraft/Minecraft-creeper-face.jpg'
import CreeperHit from './Minecraft/creeperHit.png'
import { Link } from 'react-router';
function header() {

  const [creeperFace, setCreeperFace] = useState(CreeperNormal)
// + useState(CreeperNormal)
//    - Initializes a piece of React state called creeperFace.
//    - Its default value is CreeperNormal (your imported green creeper face image).
//    - This means when the component first renders, the creeper image shown will be the normal green face.
// + creeperFace
//    - Holds the current image source for the creeper.
//    - It changes whenever you call setCreeperFace(...).
// + setCreeperFace
//    - A function provided by React to update the state.
//    - When you call it, React re-renders the component with the new image.



  const hit_Creeper = () =>{
    const audio2 = new Audio(Attack);
    const audio1 = new Audio(Creeper);
      audio2.play();
    // Delay the second sound by 1 second (1000 ms)
    setTimeout(() => {
      audio1.play();
    }, 200);
    
    
    // change image to 'hit' version
    setCreeperFace(CreeperHit);
    // - When the creeper is clicked, this line changes the state to CreeperHit (your imported “hit” image).
    // - React re-renders, so the <img src={creeperFace} /> now points to the hit image.



    //Revert back after 1 second
    setTimeout(() =>{
        setCreeperFace(CreeperNormal);
    },50);
// - After 50 milliseconds, the state is updated again to the original creeper face (but here you’re using a URL instead of the imported CreeperNormal).
// - This makes the creeper flash to the hit image very briefly, then revert back.
  }  
const background_click = (id) =>{
  for(var i=1;i<=5;i++){
    const j = "option" + i;
    const el = document.getElementById(j);
    if( j === id){
      el.style.backgroundColor = "green";

    }else{
      el.style.backgroundColor = "transparent";
    }
  }
}

  return (
    <div>
      <div className='headerTop'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Lego_Minecraft_logo_2021.svg/2560px-Lego_Minecraft_logo_2021.svg.png" alt="" id='creeper_face'/>
        <div className='option'>
          <Link to = '/' className='no_underline'>
            <div className='option_style' 
                  id='option1' 
                  onClick={() => background_click("option1")}
                  >
                <a href="">Home</a>
            </div>
          </Link >
          <div className='option_style'>
              <p>│</p>
          </div>
          <Link to = '/inventory' className='no_underline'>
            <div className='option_style' id='option2'  onClick={() => background_click("option2")}>
                <a href="">Inventory</a>
            </div>
          </Link>
          <div className='option_style'>
              <p>│</p>
          </div>
          <Link to = '/charactors' className='no_underline'>
            <div className='option_style'  id='option3' onClick={() => background_click("option3")}>
                <a href="">Charactors</a>
            </div>
          </Link>
          <div className='option_style'>
              <p>│</p>
          </div>
          <div className='option_style'  id='option4' onClick={() => background_click("option4")}>
              <a href="">Maps</a>
          </div>
          <div className='option_style'>
              <p>│</p>
          </div>
          <div className='option_style'  id='option5'  onClick={() => background_click("option5")}>
              <a href="">Updates</a>
          </div>
        </div>
        <div className='creeper' onClick={hit_Creeper}>
          <img src={creeperFace} alt="" />
        </div>
      </div>
    </div>
  )
}

export default header