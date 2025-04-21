import { useAuth } from '../../context/AuthContext';
import LoginForm from "../../components/LoginForm/LoginForm";
import UserDashboard from "../../components/UserDashboard/UserDashboard";

const UserPage = () => {
  const { user } = useAuth();

  return (
    <div className="user-page">
      {user ? <UserDashboard /> : <LoginForm />}
    </div>
  );
};

export default UserPage;