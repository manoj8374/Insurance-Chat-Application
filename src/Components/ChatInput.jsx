import { useState } from 'react';
import styled from 'styled-components';
import { IoSend } from 'react-icons/io5';

const InputContainer = styled.form`
  display: flex;
  padding: 16px;
  background-color: white;
  border-top: 1px solid #e0e0e0;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  margin-right: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #2196F3;
  }
`;

const SendButton = styled.button`
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1976D2;
  }

  &:disabled {
    background-color: #BDBDBD;
    cursor: not-allowed;
  }
`;

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <SendButton type="submit" disabled={!message.trim()}>
        <IoSend size={20} />
      </SendButton>
    </InputContainer>
  );
};

export default ChatInput;