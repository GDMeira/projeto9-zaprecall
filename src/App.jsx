import { useState } from 'react';
import ZapGame from './pages/zapGame/ZapGame';
import ResetStyle from './pages/zapGame/components/ResetStyle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResetStyle />
      <ZapGame />
    </>
  )
}

export default App