import React from 'react';
const classNames = require('classnames');

export const ColorActions = ({ colorPickerOptions, selectedColor, setSelectedColor }) => {
  return (
    <div className="card-actions">
      <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
        {colorPickerOptions.map((color, index) => {
          return (
            <div
              className={
                classNames({
                  'color-box': true,
                  'mx-8': true,
                  'my-15': true,
                  'selected': selectedColor === color
                })
              }
              onClick={() => setSelectedColor(color)}
              key={color}
              style={{ backgroundColor: color }}
            ></div>
          );
        })}
      </div>
    </div>
  )
}
