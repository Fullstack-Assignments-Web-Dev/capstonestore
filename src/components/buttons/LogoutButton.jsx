import { logOut } from '../AJAXhelper';
import { useNavigate } from 'react-router-dom';
import '../../App.css'

export default function LogoutButtn() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate('/', { replace: true });
    }

    return (
        <button className="navbar-link logout-button" onClick={handleLogout}>Logout</button>
    )
}