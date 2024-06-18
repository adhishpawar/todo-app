import {useParams,Link}  from 'react-router-dom'
function WelcomeComponent()
{
    const {username} = useParams()
    return (
        <div className="Welcome">
            <h1>Welcome {username}!!</h1>
            <div>
                Manage Your todos - <Link to="/todos">Click here</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent