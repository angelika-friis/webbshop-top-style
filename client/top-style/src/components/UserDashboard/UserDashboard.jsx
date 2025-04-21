import { useAuth } from '../../context/AuthContext';
import './UserDashboard.css';

const UserDashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className='user-dashboard'>
            <h2>Hello {user.username}!</h2>
            <p>You are signed in.</p>
            <button onClick={(e) => logout()}>Logout</button>
        </div>
    )
}

export default UserDashboard;