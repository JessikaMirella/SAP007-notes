import { Route, BrowserRouter, Routes as RoutesDOM } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const Routes= ()=> {
    
    return (
    <BrowserRouter>
        <RoutesDOM> 
            <Route exact path="/" element={<Login/>}/> 
            <Route path="/Login" element={<Login/>}/>  
            <Route path="/Register" element={<Register/>}/>
        </RoutesDOM> 
    </BrowserRouter>
    );
}

export default Routes;