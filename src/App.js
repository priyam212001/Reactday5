import logo from './logo.svg';
import './App.css';
import {Routes,Route,NavLink,Navigate} from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/form" element ={<Form/>}></Route>
        <Route path="*" element={<Navigate to ="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
