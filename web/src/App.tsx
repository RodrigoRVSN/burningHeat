import { useContext } from "react";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { AuthContext } from "./contexts/auth";
import { ContentWrapper } from "./styles";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <ContentWrapper className={!!user ? "contentSigned" : ""}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </ContentWrapper>
  );
}

export default App;
