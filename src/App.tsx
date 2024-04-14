import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Codin 1</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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

Button (x)
Label - (x)
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

3) do the github actions

4) Build shit.
*/