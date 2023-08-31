import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Contact from "./components/Contact";
import About from "./components/About";
import Director from "./components/Director";
import Tl from "./components/Tl";
import Hr from "./components/Hr";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact/" element={<Contact />}>
          <Route path="director" element={<Director />}></Route>
          <Route path="tl" element={<Tl />}></Route>
          <Route path="hr" element={<Hr />}></Route>
        </Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
