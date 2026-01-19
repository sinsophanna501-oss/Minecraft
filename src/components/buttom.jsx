import './buttom_selection.css'
import Tools from './sound/Random_break.ogg.mp3'
import Combat from './sound/Sweep_attack1.ogg.mp3'
import Food from './sound/Eat2.ogg.mp3'
import Ingredient from './sound/Successful_hit.ogg.mp3'
import Egg from './sound/Chicken_plop.ogg.mp3'
import Command from './sound/Click_stereo.ogg.mp3'
function buttom({src,text,id}) {
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

    const audio6 = new Audio(Tools);
    const audio7 = new Audio(Combat);
    const audio8 = new Audio(Food);
    const audio9 = new Audio(Ingredient);
    const audio10 = new Audio(Egg);
    const audio11 = new Audio(Command);

    if(id === "set6"){
      audio6.play();
    }else if( id === "set7"){
      audio7.play();
    }else if( id === "set8"){
      audio8.play();
    }else if( id === "set9"){
      audio9.play();
    }else if( id === "set10"){
      audio10.play();
    }else if( id === "set11"){
      audio11.play();
    }
    
  };
  return (
    <>
        <div className='selection_buttom' id={id} onClick={click}>
            <img src={src} alt="" />
            <p>{text}</p>
        </div>
    </>
  )
}

export default buttom