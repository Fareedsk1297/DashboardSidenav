
// import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics'

function App() {
 
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element= {<Home/>} />
  <Route path="/users" element= {<Users/>} />
  <Route path="/analytics" element= {<Analytics/>} />
  <Route path="/setting" element= {<Settings/>} />


 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
