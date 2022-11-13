import React, { Component, useState } from 'react';


export default function ProductOptionsSelector(props) {

  const [selectedOptionCode, setSelectedOptionCode] = useState(null);

  console.log("options", props.options)

  const optionsElems = props?.options?.map(option => {
    const onOptionClick = () => setSelectedOptionCode(option.code);
    return (
      <div className={"product-option " + (selectedOptionCode == option.code ? " product-option-selected" : "")} key={option.code} onClick={onOptionClick}>
        {option.name}
      </div>);
  });

  return (
  <div className='product-option-container'>
    <h5 className='mb-3'>{props.title}</h5>
    <div className='d-flex flex-wrap'>
      {optionsElems}
    </div>
  </div>
  );


}