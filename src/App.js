import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import "./index.css";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
