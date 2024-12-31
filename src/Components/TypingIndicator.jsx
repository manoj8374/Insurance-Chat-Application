import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 8px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2196F3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 8px;
`;

const TypingBubble = styled.div`
  background-color: #E3F2FD;
  padding: 12px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #2196F3;
  border-radius: 50%;
  animation: ${bounce} 1s infinite;
  animation-delay: ${props => props.$delay}s;
`;

const TypingIndicator = () => {
  return (
    <Container>
      <Avatar>B</Avatar>
      <TypingBubble>
        <Dot $delay={0} />
        <Dot $delay={0.2} />
        <Dot $delay={0.4} />
      </TypingBubble>
    </Container>
  );
};

export default TypingIndicator;