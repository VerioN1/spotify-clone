import React from 'react';
import './NavButton.css';
type Props = {
  Icon: React.ReactNode;
  onClick: () => void;
  text: string;
};
const NavButton = ({ Icon, onClick, text }: Props) => {
  return (
    <div className="nav-button" onClick={onClick}>
      {Icon}
      <p className="bold">{text}</p>
    </div>
  );
};

export default NavButton;
