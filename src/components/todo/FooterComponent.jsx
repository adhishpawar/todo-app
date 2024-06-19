import { useContext } from "react"
import { AuthContext } from "./Security/AuthContext"

function FooterComponent()
{
    const authcontext = useContext(AuthContext)
    // console.log(authcontext.number)

    return (
        <footer className="footer">
            <div className="container">
                Your Footer 
            </div>
        </footer>
    )
}

export default FooterComponent