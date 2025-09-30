import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect dijalankan. Count:', count)
  });

  return(
    <div>
      <h1>Belajar useEvent</h1>
      <button onClick={() => setCount(count + 1)}>
        Hitung: {count}
      </button> 
    </div>
  )
}

export default App;
