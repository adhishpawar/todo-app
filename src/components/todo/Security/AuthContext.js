
import { createContext, useContext, useState } from "react";
//1. Create a Context

export const AuthContext = createContext() 

export const useAuth = () => useContext(AuthContext)

//2. Share the created context with other compoenets
export default function AuthProvider({children})
{
    //Put some state in the Context
    const [number, setNumber] = useState(10)
    
    const [isAuthenticated, SetAuthenticated] = useState(false) 

    // setInterval(() => setNumber(number+1) , 10000)

    // const valueToBeShared = {number,isAuthenticated,SetAuthenticated}

    function login(username, password)
    {
        if(username === 'Adhish' && password==='dummy')
            {
                SetAuthenticated(true)
                return true
            }   
            else{
                
                SetAuthenticated(false)
                return false
            }
    }

    function logout()
    {
        SetAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}


