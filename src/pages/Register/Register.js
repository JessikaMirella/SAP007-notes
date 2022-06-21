import Input from "../../components/Inputs/Index";
import Button from "../../components/Button/Index";
import Header from "../../components/Header/Header";
import logo from "../../images/logo.png";
import "./Register.css";

function Register() {
  return (
    <div className="appRegister">
      <Header>
        <img className="logo" src={logo} />
      </Header>
      <div className="container">
        <form>
          <Input className="name" type="text" placeholder="nome" />
          <Input className="emailRegister" type="email" placeholder="email" />
          <Input
            className="passwordRegister"
            type="password"
            placeholder="senha"
          />
          <Input
            className="passwordConfirm"
            type="password"
            placeholder="Confirme a senha"
          />
          <Button
            className="confirmRegister"
            type="submit"
            children="Cadastrar"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
