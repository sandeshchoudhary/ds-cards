import React from 'react';
import * as components from '@innovaccer/design-system';

// Body renderer
const renderBody = body => {
  return body.map((data, index) => {
    const { type, ...rest } = data;
    let  Comp = type ? components[type] : null;
    if(type == "Row"){
      return (
        Comp && <Comp key={index}>{rest.column && renderRow(rest.column)}</Comp>
      )
    }
    
    return (
    Comp && <Comp key={index} {...rest}></Comp>
    )
  })
}


// Row renderer
const renderRow = column => {
    return column.map((data, index) => {
      const { type, ...rest } = data;
      const Comp = type ? components[type] : null;
      if(type == "Column"){
        return (
          Comp && <Comp key={index} {...rest}>{rest.item && renderColumn(rest.item)}</Comp>
        )
      }
      return (
          Comp && <Comp key={index} {...rest}></Comp>
      )
    })
}


// Column renderer
const renderColumn = item => {
  return item.map((data, index) => {
    const { type, ...rest } = data;
    const Comp = type ? components[type] : null;
    return (
        Comp && <Comp key={index} {...rest}></Comp>
    )
  })
}


// Main renderer
const DSRenderer = data => {
  const CardComp = components['Card'];
  const template = (
    <CardComp
      shadow="medium"
      className="p-4"
      style={{
      minHeight: '250px',
      padding: '16px',
      backgroundColor: 'white',
      minWidth: '150px',
      padding:"20px"}}>
      {data.body && renderBody(data.body)}
    </CardComp>
  );
  return template;
};

export default DSRenderer;