import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import "./LoginForm.css";
import "./ToastStyles.css";

const LoginForm = () => {
    const { login, register } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const CustomToast = ({ username }) => (
      <div className="custom-toast">
        Hello {username}! You are now registered. Please login.
      </div>
    );

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(username, password);
      } catch (error) {
        console.log('Error login in: ' + error.message);
      }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await register(username, password);
          toast.custom(<CustomToast username={username} />, { duration: 4000 });
        } catch (error) {
          console.log('Error registering user: ' + error.message);
        }
      };

    return (
        <div className="user-page">
          <Toaster />
                <div className='user-form'>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="button-row">
                        <button type="submit" onClick={handleRegister}>Register</button>
                        <button type="button"onClick={handleLogin}>Login</button>
                    </div>
            </div>
        </div>
    );
};

export default LoginForm;
