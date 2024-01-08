import { Route, Routes } from 'react-router-dom';
import Index1219 from './views/1219';
import Index1221 from './views/1221';
import Index1222 from './views/1222';
import Index1226 from './views/1226';
import Index1228 from './views/1228';
import Index1229 from './views/1229/React';
import Index0102 from './views/0102';




function App() {
  return (
    <>
      <Routes>
        <Route path="/1219" element={<Index1219 />} />
        <Route path="/1221" element={<Index1221 />} />
        <Route path="/1222" element={<Index1222 />} />
        <Route path="/1226" element={<Index1226 />} />
        <Route path="/1228" element={<Index1228 />} />
        <Route path="/1229" element={<Index1229 />} />
        <Route path="/0102" element={<Index0102 />} />
        
      </Routes>
    </>
  );
}

export default App;