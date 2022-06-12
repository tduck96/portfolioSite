import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css'
function App() {
  return (
    <Router>
     <Nav />
      <Routes>
     <Route path ='/' element = {<Home />}></Route>
     <Route path = '/projects' element = {<Projects />}></Route>
     <Route path = '/contact' element = {<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
