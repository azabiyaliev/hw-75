import { Route, Routes } from 'react-router-dom';
import Password from './features/components/password.tsx';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Password/>}/>
      </Routes>
    </>
  )
};

export default App
