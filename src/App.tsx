import { useState } from 'react'
import './App.css'
import { Button, ButtonProps } from './stories/components';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    console.log('button was clicked');
  };

  const buttonProps: ButtonProps = {
    size: 'normal',
    label: 'ButtonTest',
    disabled: false,
    onClick: handleButtonClick,
  };

  return (
    <>
      <div></div>
    </>
  )
}

export default App
/*
TODO:
    Table Row
    Table Header
    Table Footer
    Table
? Done:
    Dropdown backgroundColor
    Label backgroundColor

    Table Cell Done



Coding 13

Matching Part 1
CI, and matching
Live run push

*/