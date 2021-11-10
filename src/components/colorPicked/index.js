import React from 'react';
import "../colorPicker/index.css";

export const ColorPicked = ({ selectedColor }) => {
  return (
    <div className="canvas" data-testid="selectedColor" style={{backgroundColor: selectedColor}}>
      <p className="text-center mx-auto px-5">{selectedColor}</p>
    </div>
  )
}
