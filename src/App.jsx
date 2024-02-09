import "./App.css";
import About from "./components/About";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Introduction />
      <About />
      <Projects />
    </>
  );
}

export default App;
