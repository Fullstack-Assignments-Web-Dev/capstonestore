import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn, makeHeaders } from '../AJAXhelper';

const APIURL = `https://fakestoreapi.com/users`;

export default function RegisterForm() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')

    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')

    
    const [error, setError] = useState('')

    const [userData, setUserData] = useState('')

    const handleSubmit = async () => {
        try {
            const response = await fetch(APIURL + '/users', {
            method: 'POST',
            headers: makeHeaders(),
            body: JSON.stringify({
                email,
                username,
                password,
                name: {firstname, lastname},
                address: {city, street, zipcode},
                phone          

            })
        });
        const result = await response.json();
        
        // setSuccessMessage (result.data.message);
        setUserData (result);
        console.log(result);

        logIn(result.data.token);
        if (result.ok) {
        navigate('/login');
    }
        } catch (error){
            if (error) {
            setError (error);
            
        }}
    }



    return (
        <div className="container">
            <h1>Register</h1>
            

            <div className="form-input">
                <form onSubmit={handleSubmit}>

{/* EMAIL */}

<label>
                    <input
                        id="email"
                        placeholder='Email Address'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                    </label>
                    <br />

{/* USERNAME */}

                <label>
                    <input
                        id="username"
                        placeholder='Username'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </label>
                    <br />

{/* PASSWORD */}
                    <label>
                    <input
                        id="password"
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </label>
                    <br />

{/* FIRSTNAME*/}

<label>
                    <input
                        id="firstname"
                        placeholder='First Name'
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                    </label>
                    <br />

{/* LASTNAME */}

<label>
                    <input
                        id="lastname"
                        placeholder='Last Name'
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    </label>
                    <br />

{/* ADDRESS STREET */}

<label>
                    <input
                        id="street"
                        placeholder='Street Address'
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        
                    />
                    </label>
                    <br />

{/* ADDRESS CITY */}

<label>
                    <input
                        id="city"
                        placeholder='City'
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        
                    />
                    </label>
                    <br />

{/* ADDRESS ZIPCODE */}

<label>
                    <input
                        id="zipcode"
                        placeholder='Zipcode'
                        type="text"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        
                    />
                    </label>
                    <br />

{/* PHONE */}

<label>
                    <input
                        id="phone"
                        placeholder='Phone Number'
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        
                    />
                    </label>
                    <br />

{/* SUBMIT BUTTON */}

                    <br /><br />
                    <button type="submit" onClick={handleSubmit}>Register</button>
                    </form>
                    
{/* MESSAGES                   */}
                 

                    {error && <p className='error-message'>Error: {error.message}</p>}
                    
                    {userData && <p>Welcome, {userData.username}!</p>}
                                       
                    
                    <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    )
} 