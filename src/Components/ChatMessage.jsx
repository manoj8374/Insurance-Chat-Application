import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  margin: 8px 0;
  padding: 8px;
  align-items: flex-start;
  ${props => props.$isUser ? 'flex-direction: row-reverse;' : ''}
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.$isUser ? '#4CAF50' : '#2196F3'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin: ${props => props.$isUser ? '0 0 0 8px' : '0 8px 0 0'};
`;

const MessageBubble = styled.div`
  background-color: ${props => props.$isUser ? '#E8F5E9' : '#E3F2FD'};
  padding: 12px;
  border-radius: 12px;
  max-width: 70%;
  word-wrap: break-word;
`;

const ChatMessage = ({ message, isUser }) => {
  return (
    <MessageContainer $isUser={isUser}>
      <Avatar $isUser={isUser}>
        {isUser ? 'U' : 'B'}
      </Avatar>
      <MessageBubble $isUser={isUser} dangerouslySetInnerHTML={{ __html: message }}/>
    </MessageContainer>
  );
};

export default ChatMessage;