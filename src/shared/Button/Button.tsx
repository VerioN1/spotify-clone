import React from 'react';
import './Button.css';
import styled from 'styled-components';
type Props = {
  children: React.ReactNode;
  radius?: '0' | '1' | '2' | '3';
  iconBtn?: boolean;
};

const StyledButton = styled.button<Props>`
  background-color: #4caf50;
  color: #000000;
  width: fit-content;
  border: none;
  aspect-ratio: ${(props) => (props.iconBtn ? '1/1' : '')};
  border-radius: ${(props) => props.radius}rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.4rem;
  cursor: pointer;
  height: max-content;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #43a047;
  }
`;
const Button = (props: Props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
