import { useState } from 'react';
import ZapGame from './pages/zapGame/ZapGame';
import ResetStyle from './ResetStyle';
import Home from './pages/home/Home';

function App() {
  const [page, setPage] = useState('Home'); //mudar se tiver home

  return (
    <>
      <ResetStyle />
      {page === 'ZapGame' ? <ZapGame /> : <Home setPage={setPage}/>}
    </>
  )
}

export default App