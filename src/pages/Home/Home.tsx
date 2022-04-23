import React from 'react';

import MainLayout from '@/shared/Layout/MainLayout';
import Header from '@/widgets/Header/Header';
import ProductsSection from '@/widgets/ProductsSection/ProductsSection';

const Home = () => {
  return (
    <MainLayout>
      <div>
        <Header />
        <ProductsSection />
      </div>
    </MainLayout>
  );
};

export default Home;
