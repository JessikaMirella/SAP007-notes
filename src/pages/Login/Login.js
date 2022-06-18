import Header from "../../components/Header/Header";
import Input from "../../components/Inputs/Index";
import Button from "../../components/Button/Index";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthGoogleContext } from "../../lib/authentication";

function Login() {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/Register");
  };

  const { userGoogle, singned } = useContext(AuthGoogleContext);

  async function loginGoogle() {
    return await userGoogle;
  }
  if (!singned) {
    return (
      <div className="App">
        <Header></Header>
        <form>
          <Input className="email" type="email" placeholder="email" />
          <Input className="password" type="password" placeholder="senha" />
          <Button children="Entrar" className="entrar" type="submit" />
          <Button
            children={"Login com Google"}
            className="google"
            type="button"
            onClick={userGoogle}
          />
          <p>Ou</p>
          <Button
            children="Cadastre-se"
            onClick={handleRegister}
            className="buttonRegister"
            type="button"
          />
        </form>
      </div>
    );
  } else {
    return(
      <Navigate to= {"/Notes"}/>
    )
   

  }
}

export default Login;
