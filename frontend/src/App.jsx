import './App.css'
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser} = useAuthContext();

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'}/>}/>
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login /> }/>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp /> }/>
      </Routes>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#fff',
            border: '1px solid #2C2C2C'
          },
        }}
      />
    </div>
  )
}

export default App;
