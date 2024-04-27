import { useState } from 'react'
import RegisterLayout from './layout/RegisterLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RegisterLayout/>
    </>
  )
}

export default App
