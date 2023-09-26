export default function LogoutButton() {
    return (
        <button className="navbar-link">Logout</button>
    )
}

// import { logOut } from './AJAXHelper.jsx';
// import { useNavigate } from 'react-router-dom';
// import '../../App.css'

// export default function LogoutButtn() {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logOut();
//         navigate('/', { replace: true });
//     }

//     return (
//         <button className="navbar-link logout-button" onClick={handleLogout}>Logout</button>
//     )
// }