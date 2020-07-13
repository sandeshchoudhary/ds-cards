import React, { useState } from 'react';
import DSRenderer from '../utils/designSystemRenderer';
import './App.css';
import MonacoEditor from 'react-monaco-editor';
import { PageHeader } from '@innovaccer/design-system';
const sampleCardJSON = require('./card.json');

const App = () => {
  const [cardData, setCardData] = useState(sampleCardJSON);
  const [editorData, setEditorData] = useState(JSON.stringify(sampleCardJSON, null, 2));

  const options = {
    selectOnLineNumbers: true
  };

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  }

  const handleJsonInput = (data, e) => {
    setEditorData(data)
    let temp;
    try {
      temp = JSON.parse(data);
      setCardData(temp);
    } catch (e) {
    }
  }

  const pageHeaderOptions = {
    title: 'Design System Cards'
  };

  return (
    <div className="App">
      <PageHeader {...pageHeaderOptions} />
      <div className="App-body">
        <div className="App-editor">
          <MonacoEditor
            width="600px"
            height="calc(100vh - 32px)"
            language="json"
            theme="vs-light"
            value={editorData}
            options={options}
            onChange={handleJsonInput}
            editorDidMount={editorDidMount}
          />
        </div>
        <div className="App-template">
          {DSRenderer(cardData)}
        </div>
      </div>
    </div>
  );
};

export default App;
