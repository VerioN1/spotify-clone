import React from 'react';
import styled from 'styled-components';
type Props = {
  children: React.ReactNode;
  styles?: string;
};
const StyledCard = styled.div<Props>`
  background-color: rgba(54, 54, 54, 0.3);
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.styles}
`;
const Card = (props: Props) => {
  return <StyledCard styles={props.styles}>{props.children}</StyledCard>;
};

export default Card;
