import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../AJAXhelper';

export default function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [successMessage, setSuccessMessage] = useState('')
    const [error, setError] = useState('') 
    const [token, setToken] = useState('')
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username,
                        password
                        }
            
                       )})
            const result = await response.json();
            logIn(result.token);
                       
            setToken(result.token);
            console.log(result.token)
                        
            if (result) {
                navigate('/');
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
            <h2></h2>
            <h3>donero:ewedon</h3>

        <div className="form-input">
            <form onSubmit={handleSubmit}>
                
                <label>
                    <input
                        autoComplete="username"
                        type="text"
                        placeholder="donero"
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
                        placeholder="ewedon"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    /> 
                </label>
                <br /> <br />
                <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
                
                {/* {successMessage && <p className='success-message'>Success: {successMessage}</p>} */}
                
                {error && <p className='error-message'>Error: {error.message}</p>}
            
                <p> Don&apos;t have an account? <a href="/register">Register</a> </p>

        </div>
    </div>
    )

}