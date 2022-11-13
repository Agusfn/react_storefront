import React from 'react';


export function ProductOptionsSelector({title, existingOptions, selectedOptionCode, onOptionCodeSelect}) {

  console.log("existingOptions", existingOptions)

  const optionsElems = existingOptions ? existingOptions.map(option => {
    const selectedClass = (selectedOptionCode === option.code) ? " product-option-selected" : "";
    return (
      <div className={"product-option mt-1"+selectedClass} key={option.code} onClick={() => onOptionCodeSelect(option.code)}>
        {option.name}
      </div>
    );
  }) : null;

  return (
  <div className='product-option-container'>
    <h5 className='mb-3'>{title}</h5>
    <div className='d-flex flex-wrap'>
      {optionsElems}
    </div>
  </div>
  );

}