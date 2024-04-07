import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar></NavBar>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/weather" element={<Home></Home>}></Route>
            <Route path="/*" element={<Home></Home>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
