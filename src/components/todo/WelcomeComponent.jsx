import {useParams,Link}  from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { retrieveHelloWorldBean } from './api/HelloWorldApiService'
import { retrieveHelloWorld } from './api/HelloWorldApiService'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'

function WelcomeComponent()
{
    const {username} = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi()
    {
        //axios used to call rest api
            retrieveHelloWorld()
            .then( (response) => successfulResponse(response) )
            .catch((error) => (errorResponse(error)))
            .finally(() => console.log('CleanUp'))
    }

    function callHelloWorldBeanAPP()
    {
        retrieveHelloWorldBean()
        .then( (response) => successfulResponse(response) )
        .catch((error) => (errorResponse(error)))
        .finally(() => console.log('CleanUp'))
    }

    function callHelloWorldBeanPathVariable()
    {
        retrieveHelloWorldPathVariable('Adhish')
        .then( (response) => successfulResponse(response) )
        .catch((error) => (errorResponse(error)))
        .finally(() => console.log('CleanUp'))
    }
    
    function successfulResponse(response)
    {
        console.log(response)
        
        setMessage(response.data)
        setMessage(response.data.message)
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
            {/* <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>  
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldBeanAPP}>
                    Call Hello World Bean
                </button>  
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldBeanPathVariable}>
                    Call Hello World by Path Variable
                </button>  
            </div> */}
            <div className='text-info'>
                {message}
            </div>
        </div>
    )
}

export default WelcomeComponent