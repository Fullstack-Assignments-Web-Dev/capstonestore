import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../AJAXhelper';




const APIURL = `https://fakestoreapi.com`;

export default function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [error, setError] = useState('') 
    const [token, setToken] = useState('')
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(APIURL + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });
            const result = await response.json();
            logIn(result.data.token);
            setSuccessMessage (result.data.message);
            setToken(result.data.token);
            navigate('/profile');
            console.log(result.data.message)
            if (result.ok) {
                navigate('/profile');
            }
        }
        catch (error) {
            setError(error);         
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1>Login</h1>

        <div className="form-input">
            <form onSubmit={handleSubmit}>
                
                <label>
                    <input
                        autoComplete="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    /> 
                </label>
<br />
                <label>
                    <input
                        autoComplete="current-password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    /> 
                </label>
                <br /> <br />
                <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
                
                {successMessage && <p className='success-message'>Success: {successMessage}</p>}
                
                {error && <p className='error-message'>Error: {error.message}</p>}
            
                <p> Don&apos;t have an account? <a href="/register">Register</a> </p>

        </div>
    </div>
    )

}