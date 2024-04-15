import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
? COMPONENTS UI

sizes : mobile | normal

1) Finish designing componens

Button Done
Label Done
Radio button Done
Table Done
	Table header
	Table row
	Table cell
	Table footer
Img DONE
Card DONE
Hero Image Done
Text DONE
Dropdown Done

2) implement Storybook test and jest test
Sb Testing - x
jest testing - /

Button (x)
Label - (x) (/)
Radio button (x)
Table (x)
	Table header
	Table row
	Table cell
	Table footer
Img (x)
Card (x)
Hero Image (x)
Text (x)
Dropdown (x)

3) do the github actions and vercel DONE

4) Build portfolio

npm run cd to build and deploy straight to prod >:)
check tailwindcss




*/