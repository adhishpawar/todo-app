import {useParams,Link}  from 'react-router-dom'
import axios from 'axios'

function WelcomeComponent()
{
    const {username} = useParams()

    function callHelloWorldRestApi()
    {
        //axios used to call rest api
        axios.get('http://localhost:8080/hello-world')
            .then( (response) => successfulResponse(response) )
            .catch((error) => (errorResponse(error)))
            .finally(() => console.log('CleanUp'))
 
    }

    function successfulResponse(response)
    {
        console.log(response)
    }
    function errorResponse(error)
    {
        console.log(error)
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}!!</h1>
            <div>
                Manage Your todos - <Link to="/todos">Click here</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>  
            </div>
        </div>
    )
}

export default WelcomeComponent