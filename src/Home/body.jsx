import React from "react";
import './body.css'

function body() {
  return (
    <div>
      <div className="description_frame_body">
        <div className="description_frame_side"></div>
        <div className="description_frame_middle">
          <p>
            Step into a world where creativity meets adventure! Our LEGO
            Minecraft website is the ultimate destination for fans who want to
            explore every detail about the blocky universe brought to life with
            LEGO bricks.
          </p>
          <div className="box">
            <div className="box_inside">
            <p>What You’ll Discover Here</p>
            </div>
          </div>
          <ul>
            <li><b> Complete Set Guides</b> – Browse through all LEGO Minecraft sets, from classic builds to the latest releases, with detailed breakdowns of pieces, features, and play functions.</li>
            <li><b> Character & Mob Encyclopedi</b> – Learn about every minifigure, mob, and creature included in LEGO Minecraft sets, with fun facts and backstories.</li>
            <li><b> Interactive World Exploration</b> – Dive into themed sections like The Nether, The End, and Overworld, each packed with set details, images, and lore connections.</li>
            <li><b> News & Updates</b>– Stay up to date with new releases, special editions, and upcoming LEGO Minecraft events.</li>
            <li><b> Community & Inspiration</b> – Share your creations, get inspired by fan builds, and connect with other builders who love combining LEGO and Minecraft.</li>
          </ul>
          <div className="box">
            <div className="box_inside">
                <p>Why This Site?</p>
            </div>
          </div>
         <p>
            We’ve built this space for true fans—whether you collect sets, play Minecraft, or just love building. Every page is designed to give you complete knowledge about LEGO Minecraft, so you never miss a detail.
          </p>
        </div>
        <div className="description_frame_side"></div>
      </div>
    </div>
  );
}

export default body;
