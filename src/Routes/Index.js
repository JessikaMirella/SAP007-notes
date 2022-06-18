import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthGoogleContext } from "../lib/authentication"



export const PrivateRoutes = ()=>{
    const {singned} = useContext(AuthGoogleContext)
    return singned ? <Outlet/> : <Navigate to = "/Loging"/>
}