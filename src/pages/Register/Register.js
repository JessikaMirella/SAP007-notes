import Input from "../../components/Inputs/Index";
import Button from "../../components/Button/Index";
import Header from "../../components/Header/Header";
import Form from "../../components/Form";
import logo from "../../images/logo.png";
import "./Register.css";

function Register() {
  return (
    <div className="appRegister">
      <Header>
        <img className="logo" src={logo} />
      </Header>
      <div className="container">
      <Form customClass="formLogin">
          <Input customClass= "inputLogin" type="text" placeholder="nome" />
          <Input customClass= "inputLogin" type="email" placeholder="email" />
          <Input
            customClass= "inputLogin"
            type="password"
            placeholder="senha"
          />
          <Input
            customClass= "inputLogin"
            type="password"
            placeholder="Confirme a senha"
          />
          <Button
            customClass="enterButton"
            type="submit"
            children="Cadastrar"
          />
        </Form>
      </div>
    </div>
  );
}

export default Register;
