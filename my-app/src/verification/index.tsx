import React, { useState ,useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CodeInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CodeInput = styled.input`
  width: 60px;
  height: 60px;
  font-size: 32px;
  margin-right: 10px;
  text-align: center;
  border: 2px solid #bbb;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: blue;
  }`;

const Button = styled.button`
  font-size: 16px;
  padding: 20px 20px;
  border: 2px solid #000;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 1rem;

  &:hover {
    background-color: #000;
    color: #fff;
  }`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

// interface VerificationProps {}

const Verification: React.FC = () => {
  const [codes, setCodes] = useState(['', '', '', '']);
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleCodeChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      // Move focus to the next input
      if (value !== '' && index < 3) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleClear = () => {
    setCodes(['', '', '', '']);
    refs[0].current?.focus();
  };

  return (
      <Container>
        <Title>Please enter the verification code:</Title>
       <Row>
         <CodeInputContainer>
           {codes.map((code, index) => (
               <CodeInput
                   key={index}
                   id={`code-input-${index}`}
                   type="text"
                   value={code}
                   onChange={(e:any) => handleCodeChange(index, e)}
               />
           ))}
         </CodeInputContainer>
         <Button onClick={handleClear}>CLEAR</Button>
       </Row>
      </Container>
  );
};

export default Verification;
