import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { CV } from "./CV/CV";
import "./App.css";

const { data, education, experience, abilities } = CV;

const App = () => (
  <div className='container'>
    <div className='sidebar_container'>
      <Sidebar data={data} />
    </div>
    <div className='components_container'>
      <Home data={data} />
      <About data={data} />
      <Skills abilities={abilities} />
      <Resume education={education} />
      <Works experience={experience} />
      <Contact data={data} />
    </div>
  </div>
);

export default App;
