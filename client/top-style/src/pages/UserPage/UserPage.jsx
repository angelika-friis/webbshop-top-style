import { useAuth } from '../../context/AuthContext';
import LoginForm from "../../components/LoginForm/LoginForm";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";

const UserPage = () => {
  const { user } = useAuth();

  return (
    <div className="user-page">
      {user ? <WelcomeMessage /> : <LoginForm />}
    </div>
  );
};

export default UserPage;