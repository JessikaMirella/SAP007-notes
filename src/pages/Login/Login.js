import Header from "../../components/Header/Header";
import Input from "../../components/Inputs/Index";
import Button from "../../components/Button/Index";
import Form from "../../components/Form";
import googleImg from "../../images/googleImg.png";
import logo from "../../images/logo.png";
import "./Login.css";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthGoogleContext } from "../../lib/authentication";
import Footer from "../../components/Footer";

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
      <>
        <Header className="header">
          <img className="logo" src={logo} />
        </Header>
        <Form customClass="formLogin">
            <Input customClass="inputLogin" type="email" placeholder="email" />
            <Input customClass="inputLogin" type="password" placeholder="senha" />
            <Button children="Entrar" customClass="enterButton" type="submit" />
            <Button
              children={<img className="googleImage" src={googleImg} />}
              customClass="google"
              type="button"
              onClick={userGoogle}
            />
            <Button
              children="Cadastre-se"
              onClick={handleRegister}
              customClass="registerButton"
              type="button"
            />
          </Form>
        </>
    );
  } else {
    return <Navigate to={"/Notes"} />;
  }
}

export default Login;
