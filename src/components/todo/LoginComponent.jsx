import { useState } from 'react'
import { useNavigate }  from 'react-router-dom'
function LoginComponent()
{
    const [username, setUsername] =useState('Adhish')
    const [password, setPassword] =useState('')

    const [showSucessMessage, setShowSucessMessage] =useState(false)
    const [showErrorMessage, setShowErrorMessage] =useState(false)

    const navigate = useNavigate();


    function handleUsernameChange(event)
    {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event)
    {
        setPassword(event.target.value)
    }

    function handleSubmit()
    {
        if(username === 'Adhish' && password==='dummy')
        {
            setShowErrorMessage(false)
            setShowSucessMessage(true)
            navigate(`/welcome/${username}`)
        }   
        else
        {
            setShowErrorMessage(true)
            setShowSucessMessage(false)
        }
        
    }

    return (
        <div className="Login">
            <h1>Time To Login</h1>
            {showSucessMessage && <div className="sucessMessage">Authenticated SuccessFully</div> }
            {showErrorMessage && <div className="errorMessage">Authentication Failed</div> }

            <div className="LoginForm">
                <div> 
                        <label>User Name: </label>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div> 
                        <label>Password : </label>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div> 
                        <button types="button" name="login" onClick={handleSubmit}> Login </button>
                </div>

            </div>
        </div>
    )
}

export default LoginComponent