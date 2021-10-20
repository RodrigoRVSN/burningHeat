import { MessageListWrapper } from "./styles";

import logoImg from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { io } from "socket.io-client";

interface MessagesProps {
  id: string;
  text: string;

  user: {
    avatar_url: string;
    name: string;
    login: string;
  };
}

const messagesQueue: MessagesProps[] = [];

const socket = io("http://localhost:4000");
socket.on("new_message", (newMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<MessagesProps[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        );
      }
      messagesQueue.shift();
      return () => {
        clearInterval(timer);
      };
    }, 3000);
  }, []);

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
            <a
              target="_blank"
              href={`https://github.com/${message.user.login}`}
            >
              <div>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </MessageListWrapper>
  );
}
