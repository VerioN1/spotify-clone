import React from 'react';
import styled from 'styled-components';

import HorizontalCard from '@/shared/Card/HorizontalCard/HorizontalCard';
const Section = styled.section`
  display: flex;
  margin-block: 2rem;
  flex-direction: column;
  width: 100%;
`;
const CardsWrapper = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-gap: 1rem 2rem;
  grid-template: auto/repeat(auto-fill, minmax(max(15rem, 25%), 1fr));
  width: 100%;
`;

const ProductsSection = () => {
  return (
    <Section>
      <h1>Good Evening</h1>
      <CardsWrapper>
        {Array.from({ length: 6 }).map((_, index) => (
          <HorizontalCard key={index} />
        ))}
      </CardsWrapper>
    </Section>
  );
};

export default ProductsSection;
