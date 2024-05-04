import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, ButtonProps } from './stories/components';

function App() {


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
      <Button {...buttonProps} />
    </>
  )
}

export default App
