import { useState } from 'react';
import ZapGame from './pages/zapGame/ZapGame';
import ResetStyle from './ResetStyle';

function App() {
  const [page, setPage] = useState('ZapGame'); //mudar se tiver home

  return (
    <>
      <ResetStyle />
      {page === 'ZapGame' ? <ZapGame /> : <h1> 400 page not found</h1>}
    </>
  )
}

export default App