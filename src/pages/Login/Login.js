import Header from "../../components/Header/Header";
import Input from "../../components/Inputs/Index";
import Button from "../../components/Button/Index";
import googleImg  from "../../images/googleImg.png"
import logo from "../../images/logo.png"
import "./Login.css"
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthGoogleContext } from "../../lib/authentication";

function Login() {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/Register");
  };

  const { userGoogle, singned, user } = useContext(AuthGoogleContext);

  async function loginGoogle() {
    return await userGoogle;
  }
  if (!singned) {
    return (
      <div className="flex">
        <Header className= "header">
        <img className="logo" src={logo}/>
        </Header>
      <div className="box">
        <form>
          <Input className="email" type="email" placeholder="email" />
          <Input className="password" type="password" placeholder="senha" />
          <Button children="Entrar" className="enter" type="submit" />
          <Button
            children={<img className="googleImage" src={googleImg}/>}
            className="google"
            type="button"
            onClick={userGoogle}/>
          <p className="p">Ou</p>
          <Button
            children="Cadastre-se"
            onClick={handleRegister}
            className="buttonRegister"
            type="button"
          />
        </form>
      </div>
      </div>
    );
  } else {
    return(
      <Navigate to= {"/Notes"}/>
    )
   

  }
}

export default Login;
