import React, { useState } from "react";
import "./index.css";
import {ColorPicked} from '../colorPicked/index';
import {ColorActions} from '../colorActions/index';


export const ColorPicker = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.initialSelectedColor)

  return (
    <div>
      <div className="layout-row justify-content-center">
        <div className="card mt-75">
          <ColorPicked selectedColor={selectedColor} />
          <ColorActions setSelectedColor={setSelectedColor} selectedColor={selectedColor} colorPickerOptions={props.colorPickerOptions} />
        </div>
      </div>
    </div>
  );
}