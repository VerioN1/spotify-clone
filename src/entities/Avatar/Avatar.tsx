import React from 'react';
import './Avatar.css';
type Props = {
  src: string;
  className?: string;
};
const Avatar = (props: Props) => {
  return <img alt="avatar-img" className="avatar-img" {...props} />;
};

export default Avatar;
