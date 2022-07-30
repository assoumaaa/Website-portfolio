import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import AboutMe from "./components/aboutMe/AboutMe";

import "./app.scss"
import "./global.scss"
import { useState, React, useContext } from "react";
import { Skills } from "./components/skills/Skills";

import { ThemeContext } from "./context";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contactMe/ContactMe";



function App() {

  const [sideBar, setSideBar] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className={'App ' + (darkMode && ' darkMode')} >
      <Topbar sideBar={sideBar} setSideBar={setSideBar} />
      <Menu sideBar={sideBar} />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;


