import React, { ReactNode } from "react";
import { Container } from "./Message.styled";

type MessageProp = {
  children: ReactNode;
};

const Message: React.FC<MessageProp> = ({ children }) => {
  return (
    <Container aria-live="polite" role="status">
      <span>{children}</span>
    </Container>
  );
};

export default Message;
