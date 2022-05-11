import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/button";
import { InputElement } from "../../components/Input/input";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <InputElement
        type="email"
        className="input"
        value={email}
        name="input"
        placeholder="user@user.com"
        onChange={(e) => setEmail(e.target.value)}
      ></InputElement>
      <InputElement
        type="password"
        className="input"
        value={password}
        name="input"
        placeholder="******"
        onChange={(e) => setPassword(e.target.value)}
      ></InputElement>
      <Button className="button">Entrar</Button>

      <p className="text-center">
        <span className="text-span">Não possui conta? </span>
        <Link className="text-link" to="/register">
          Cadastre-se
        </Link>
      </p>
    </>
  );
};
