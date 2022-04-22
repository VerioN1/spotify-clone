import React from 'react';
import './Button.css';
type Props = {
  children: React.ReactNode;
  radius?: '0' | '1' | '2' | '3';
  isIconBtn?: boolean;
};
const Button = ({ children, radius = '1', isIconBtn = false }: Props) => {
  return (
    <button
      className="styled-button"
      style={{ borderRadius: `${radius}rem`, aspectRatio: `${isIconBtn ? '1/1' : ''}` }}
    >
      {children}
    </button>
  );
};

export default Button;
