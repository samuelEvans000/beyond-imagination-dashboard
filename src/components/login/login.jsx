
import  { useState } from 'react';
import {useUser } from '../UserContext';
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate('')

  const handleLogin = () => {
    login(username, password);
    // Redirect to the next page upon successful login
    // You can use React Router for this
    navigate('/dashboard')
  };

    

  return (
    <>
    <div className='loginpage'>   
     
      <div className='login'>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        className='user'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </>
  );
};


export default Login;
