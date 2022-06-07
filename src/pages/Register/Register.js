
import Input from "../../components/Inputs/Index";
import Button from "../../components/Button/Index";

function Register() {
  return (
    <div className="App">
      <Input className="name" type="text" placeholder="nome" />
      <Input className="email" type="email" placeholder="email" />
      <Input className="password" type="password" placeholder="confirmar senha" />
      <Button className="Cadastrar" type="submit" children="Cadastrar" />
    </div>
  );
}

export default Register;