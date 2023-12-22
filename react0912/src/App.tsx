import { Route, Routes } from 'react-router-dom';
import Index1219 from './views/1219';
import Index1221 from './views/1221';
import Index1222 from './views/1222';

function App() {
  return (
    <>
      <Routes>
        <Route path="/1219" element={<Index1219 />} />
        <Route path="/1221" element={<Index1221 />} />
        <Route path="/1222" element={<Index1222 />} />
      </Routes>
    </>
  );
}

export default App;
