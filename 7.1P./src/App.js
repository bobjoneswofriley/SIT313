import './App.css';
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import {Routes, Route} from 'react-router-dom'
import Signup from './routes/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'login' element = {<Login />} />
        <Route path = 'signup' element = {<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
