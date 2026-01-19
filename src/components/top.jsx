import './top_selection.css'
import Building_b from './sound/Stone_dig4.ogg.mp3'
import Colored_b from './sound/Cloth_dig3.ogg.mp3'
import Nutural_b from './sound/Grass_dig4.ogg.mp3'
import Functional_b from './sound/Lodestone_lock2.ogg.mp3'
import All_b from './sound/Wood_dig4.ogg.mp3'
function Top({src,text,id,backgroundcolor,font,border}) {
  const combined_syle = {...backgroundcolor,...font,...border}
  const click = () => {
    for (let i = 1; i <= 11; i++) {
      const j = "set" + i;
      const el = document.getElementById(j);

      if (!el) continue;

      if (j === id) {
        el.style.backgroundColor = "green";
        el.style.color = "white";
        el.style.border = "2px solid white";
      } else {
        el.style.backgroundColor = "#c6c6c6";
        el.style.color = "black";
        el.style.border = "2px outset black";
      }
    }
    const audio1 = new Audio(Building_b);
    const audio2 = new Audio(Colored_b);
    const audio3 = new Audio(Nutural_b);
    const audio4 = new Audio(Building_b);
    const audio5 = new Audio(Functional_b);
    const audio6 = new Audio(All_b);

    if(id === "set1"){
      audio1.play();
    }else if( id === "set2"){
      audio2.play();
    }else if( id === "set3"){
      audio3.play();
    }else if( id === "set4"){
      audio4.play();
    }else if( id === "set5"){
      audio5.play();
    }else if( id === "set6"){
      audio6.play();
    }
  };
  return (
    <>
        <div className='selection_top' id={id} onClick={click} style={combined_syle}>
            <img src={src} alt="" />
            <p>{text}</p>
        </div>
    </>
  )
}

export default Top