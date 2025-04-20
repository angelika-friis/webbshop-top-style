import { useAuth } from '../../context/AuthContext';

const WelcomeMessage = () => {
    const { user } = useAuth();
    return (
        <>
            <h2>Hello {user.username}!</h2>
            <p>You are signed in.</p>
        </>
    )
}

export default WelcomeMessage;