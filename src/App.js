import { Routes,Route } from 'react-router-dom';
import Home from "./page/Home"
import About from "./page/About"
import Project from "./page/Project"
import Contact from "./page/Contact"
import History from "./page/History"





import Nav from './component/Nav';
function App() {
  return (
      <header className="App-header">
        <Nav/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>  }/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/history' element={<History/>}/>




        </Routes>
        
      </header>
 
  );
}

export default App;
