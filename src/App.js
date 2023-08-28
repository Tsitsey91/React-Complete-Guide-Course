import React, { useState } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)

  console.log('APP RUNNING')

  const handleToggleParagraph = () => {
    setShowParagraph((prevShowParagraph) => {
      return !prevShowParagraph
    })
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={handleToggleParagraph}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
