import React from 'react';
import * as components from '@innovaccer/design-system';

const renderBody = body => {
  const RowComp = components["Row"];
  return body.map((data, index) => {
    const { type, ...rest } = data;
    const Comp = type ? components[type] : null;
    return (
      <RowComp key={index}>
        {Comp && <Comp {...rest}></Comp>}
      </RowComp>
    )
  })
}

const DSRenderer = data => {
  const CardComp = components['Card'];
  const template = (
    <CardComp
      shadow="medium"
      style={{
      minHeight: '250px',
      padding: '16px',
      backgroundColor: 'white',
      minWidth: '150px'}}>
      {data.body && renderBody(data.body)}
    </CardComp>
  );
  return template;
};

export default DSRenderer;