import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import BeritaPages from "./pages/BeritaPages";
import GaleryPages from "./pages/GaleryPages";
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";

function App() {
  return (
    <div>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePages}></Route>
        <Route path="/berita" Component={BeritaPages}></Route>
        <Route path="/galeri" Component={GaleryPages}></Route>
      </Routes>
      <FooterComponents />
    </div>
  );
}

export default App;
