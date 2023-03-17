

import { Routes, Route, Link } from "react-router-dom";
import Bienvenidos from '../components/Bienvenidos';
import Navbar from "../components/navbar/Navbar";
import RegionalesInstPub from "../components/news-social/instituciones-publicas/RegionalesInstPub";
import Nacionales from "../components/news-social/nacionales/Nacionales";
import Barranca from "../components/news-social/provincias/barranca/Barranca";

function App() {

  return (
    <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Bienvenidos/> } />
          <Route path="news-barranca" element={<Barranca />} />
          <Route path="inst-pub-regional" element={<RegionalesInstPub />} />
          <Route path="nacionales" element={<Nacionales />} />
      </Routes>
    </div>
  )
}

export default App
