import React from "react";
import All_item from "./all_item";
import Building_block from "./building_block.jsx";
import Natural_block from "./natural_block.jsx";
import Colored_block from "./colored_block.jsx";
import Functional_block from "./functional_block.jsx";
import Tool from "./tool.jsx";
import Combat from "./combat.jsx";
import Food from "./food.jsx";
import Ingred from "./ingred.jsx";
import Egg from "./egg.jsx";
import Operator from "./operator.jsx";
import Top_sel from "./top_selection.jsx";
import Buttom_Sel from "./buttom_selection.jsx";
import { Routes, Route, Navigate } from "react-router";
function inventory() {
  return (
    <div>
      <div className="inven_back">
        <div className="dark">
          <Top_sel />
          <div className="layout">
            <div className="outside">
              <div className="inside">
                <Routes>
                  <Route path="/" element={<Navigate to="All" replace />} />
                  <Route path="All" element={<All_item />} />
                  <Route path="colored_block" element={<Colored_block />} />
                  <Route path="natural_block" element={<Natural_block />} />
                  <Route path="functional_block" element={<Functional_block />} />
                  <Route path="building_block" element={<Building_block />} />
                  <Route path="tool" element={<Tool />} />
                  <Route path="combat" element={<Combat />} />
                  <Route path="food" element={<Food />} />
                  <Route path="ingred" element={<Ingred />} />
                  <Route path="egg" element={<Egg />} />
                  <Route path="operator" element={<Operator />} />
                </Routes>
              </div>
            </div>
          </div>
          <Buttom_Sel />
        </div>
      </div>
    </div>
  );
}

export default inventory;
