import { Routes, Route, Link } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PageList from './Pages/PageList';
import './index.css'
function App() {
  return (
    <div className="App">
      <div id ="menu">
          <ul>                   
            <li>
              <Link to="/login"> Login </Link> 
            </li>
            <li>    
              <Link to="/register"> Register </Link> 
            </li>
            <li>    
              <Link to="/page"> PageList </Link> 
            </li>
          </ul>
        </div>
        <Routes>
          <Route path='/login' element={ < Login/> } />
          <Route path='/register' element={ < Register/> } />
          <Route path='/page' element={ < PageList/> } />
        </Routes>
    </div>
  );
}

export default App;
