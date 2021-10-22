import { LoginBoxWrapper } from "./styles";
import { VscGithubInverted } from "react-icons/vsc";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export function LoginBox() {
  const { signInUrl, user } = useContext(AuthContext);

  return (
    <LoginBoxWrapper>
      <strong>Entre e compartilhe conosco!</strong>

      <a href={signInUrl}>
        <VscGithubInverted size={20} />
        {!!user ? user.name : "Entrar com github"}
      </a>
    </LoginBoxWrapper>
  );
}
