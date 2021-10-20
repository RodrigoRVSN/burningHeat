import { MessageListWrapper } from "./styles";

import logoImg from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface MessagesProps {
  id: string;
  text: string;

  user: {
    avatar_url: string;
    name: string;
  };
}

export function MessageList() {
  const [messages, setMessages] = useState<MessagesProps[]>([]);

  useEffect(() => {
    try {
      api.get<MessagesProps[]>("/messages/last3").then((res) => {
        setMessages(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <MessageListWrapper>
      <img src={logoImg} alt="Dowhile 2021" />

      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{message.text}</p>
            <div>
              <div>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </MessageListWrapper>
  );
}
