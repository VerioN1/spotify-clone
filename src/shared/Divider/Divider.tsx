import React from 'react';
import './Divider.css';
type Props = {
  space?: string;
  withLine?: boolean;
};
const Divider = ({ withLine = false, space = '1' }: Props) => {
  return (
    <div className="divider-wrapper" style={{ marginBlock: `${space}rem` }}>
      {withLine && <div className="divider-line" />}
    </div>
  );
};

export default Divider;
