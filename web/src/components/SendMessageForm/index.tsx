import { FormEvent, useContext, useState } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import {
  SendMessageContentWrapper,
  SendMessageFormWrapper,
  UserInformation,
} from "./styles";

export function SendMessageForm() {
  const { signOut } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  async function handleSendMessage(ev: FormEvent) {
    ev.preventDefault();
    if (!message.trim()) {
      toast.dark("❌ O campo está vazio!");
      return;
    }
    await api
      .post("/messages", { message })
      .then((res) => console.log(res))
      .catch(console.log)
      .then(() => toast.dark("✔ Mensagem enviada!"))
      .catch((err) => toast.dark(`❌ Erro ao enviar a mensagem: ${err}`));
    setMessage("");
  }

  return (
    <SendMessageContentWrapper>
      <button onClick={signOut}>
        <VscSignOut size="32" />
      </button>

      <UserInformation>
        <div>
          <img src="https://github.com/rodrigorvsn.png" />
        </div>

        <strong>Rodrigo Victor</strong>

        <span>
          <VscGithubInverted size="16" /> rodrigorvsn
        </span>
      </UserInformation>

      <SendMessageFormWrapper onSubmit={(ev) => handleSendMessage(ev)}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
        />

        <button type="submit">Enviar mensagem</button>
      </SendMessageFormWrapper>
    </SendMessageContentWrapper>
  );
}
