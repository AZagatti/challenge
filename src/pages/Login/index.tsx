import React, { useCallback, useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";

import api from "../../services/api";

import logoImg from "../../assets/images/logo.png";
import { Container } from "./styles";

interface Request {
  token: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      (async () => {
        e.preventDefault();
        try {
          const { data } = await api.post<Request>("sign-in", {
            email: login,
            senha: password,
          });
          history.push("/home", { token: data.token });
        } catch (err) {}
      })();
    },
    [history, login, password]
  );

  return (
    <Container>
      <Card>
        <img src={logoImg} alt="logo" />
        <form onSubmit={handleLogin}>
          <Input
            label="Login"
            placeholder="Digite seu login..."
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
