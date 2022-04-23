import React from 'react';

import Card from '@/shared/Card/Card/Card';
import styled from "styled-components";
const Img = styled.img`
width: 4rem;
aspect-ratio: 1/1;
border-radius: 0.3rem 0 0 0.3rem;
`;
const Wrapper = styled.div`
padding: 1rem;
  display: flex;
  width: 100%;
  height: 100%;
`;
const HorizontalCard = () => {
  return (
    <Card styles={'cursor: pointer;'}>
        <Img loading="lazy" src="https://picsum.photos/id/100/200/300" alt="...." />
      <Wrapper>HorizontalCard</Wrapper>
    </Card>
  );
};

export default HorizontalCard;
