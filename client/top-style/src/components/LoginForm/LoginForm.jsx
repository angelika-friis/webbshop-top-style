import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import "./LoginForm.css";

const LoginForm = () => {
    const { login, register } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(username, password);
        alert('Inloggning lyckades!');
      } catch (error) {
        alert('Fel: ' + error.message);
      }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await register(username, password);
          alert('Inloggning lyckades!');
        } catch (error) {
          alert('Fel: ' + error.message);
        }
      };
    return (
        <div className="user-page">
            <div className="user-form">
                <div className='container'>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="button-row">
                        <button type="submit" onClick={handleRegister}>Register</button>
                        <button type="button"onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
