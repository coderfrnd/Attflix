import './App.css';
import Navbar from './Component/Navbar';
import {Route,Routes} from 'react-router-dom'
import { Home } from './Component/Pages/Home';

import { AuthContextProvider } from './Context/Authcontext';
import Login from './Component/Pages/Login';
import Signup from './Component/Pages/Signup';
import Account from './Component/Pages/Account';
import ProtectedRoute from './Component/ProtectedRoute';

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/signup' element ={<Signup/>} />
      <Route path='/account' element ={<ProtectedRoute><Account/></ProtectedRoute>} />
     </Routes>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
