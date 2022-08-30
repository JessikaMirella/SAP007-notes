import { Route, BrowserRouter, Routes as RoutesDOM } from "react-router-dom";
import { PrivateRoutes } from "../Routes/Index";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Notes from "../pages/Notes/Notes";


const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDOM>
        <Route exact path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Notes" element={<PrivateRoutes />}>
          <Route path="/Notes" element={<Notes />} />
        </Route>
      </RoutesDOM>
    </BrowserRouter>
  );
};

export default Routes;
