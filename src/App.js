import { useState } from 'react';
import styled from 'styled-components';
import ChatMessage from './Components/ChatMessage';
import ChatInput from './Components/ChatInput';
import TypingIndicator from './Components/TypingIndicator';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;

  @media (max-width: 840px) {
    max-width: 100%;
    margin: 0;
  }
`;

const Header = styled.header`
  background-color: #2196F3;
  color: white;
  padding: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`;

const WelcomeMessage = styled.div`
  text-align: center;
  color: #757575;
  margin: 24px 0;
`;

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your friendly chatbot. How can I help you today?", isUser: false }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async(message) => {
    //send a request to the backend
    const latestMessages = [...messages, { text: message, isUser: true }];
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    setIsTyping(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ChatHistory": latestMessages
      })
    }
    const res = await fetch('http://192.168.0.110:8000/items', options)
    const data = await res.json()
    console.log(data)
    
    const botResponse = data["Answer"];
    
    setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    setIsTyping(false);
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! Nice to meet you!';
    } else if (lowerMessage.includes('how are you')) {
      return "I'm doing great, thanks for asking! How about you?";
    } else if (lowerMessage.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return "I'm still learning! Could you try asking something else?";
    }
  };

  return (
    <Container>
      <Header>
        <h1>Chatbot</h1>
      </Header>
      <ChatContainer>
        <WelcomeMessage>
          Start a conversation with the chatbot!
        </WelcomeMessage>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
        {isTyping && <TypingIndicator />}
      </ChatContainer>
      <ChatInput onSendMessage={handleSendMessage} />
    </Container>
  );
}

export default App;