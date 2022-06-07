import Header from "../../components/Header/Header"
import Input from "../../components/Inputs/Index";
import Button from "../../components/Button/Index"
import {useNavigate} from "react-router-dom";



function Login() {

  const navigate = useNavigate();

  const handleRegister=(e)=>{
    e.preventDefault();
    navigate("/Register")
  }

  return (
    <div className="App">
      <Header></Header>
      <form>
      <Input className="email" type="email" placeholder="email" />
      <Input className="password" type="password" placeholder="senha" />
      <Button children="Entrar"className="Entrar" type="submit" />
      <p>Ou</p>
      <Button children="Cadastre-se" onClick={handleRegister} className="buttonRegister" type="button"/> 
      </form>
    </div>
  );
}

export default Login;
