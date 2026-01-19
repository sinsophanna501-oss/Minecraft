import React, { useState } from 'react'
import './item.css'
// - We import React and the useState hook (to store hover state and mouse position).
// - We also import the CSS file for styling


function Item({ image,label }) {
  const [hovered, setHovered] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
// - hovered → tracks whether the mouse is inside the item (true when hovering, false when not).
// - pos → stores the current mouse coordinates (x and y).

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY })
  }
// - onMouseMove fires every time the mouse moves inside the item.
// - e.clientX and e.clientY give the cursor’s position relative to the viewport.
// - We update pos so the tooltip knows where to go.

  return (
    <div
      className="item_slot"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {hovered && (
        <div
          className="TagName"
          style={{ top: pos.y + 20  + 'px', left: pos.x - 30 + 'px' }}
        >
          <div className='tag_out'>
            <p>{label}</p>
          </div>
        </div>
      )}
      <img src={image} alt="" />
    </div>
  )
}
// - onMouseEnter → sets hovered = true (tooltip appears).
// - onMouseLeave → sets hovered = false (tooltip disappears).
// - onMouseMove → updates tooltip position.
// - {hovered && (...)} → conditional rendering. Tooltip only shows when hovered is true.
// - Tooltip (TagName) is styled with top and left based on the mouse position.


export default Item
