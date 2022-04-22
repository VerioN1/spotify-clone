import React from 'react';
import { ArrowBack } from 'tabler-icons-react';

import Button from '@/entities/Button/Button';
import MainLayout from '@/shared/Layout/MainLayout';
import Header from '@/widgets/Header/Header';

const Home = () => {
  return (
    <MainLayout>
      <div className="page-layout">
        <h1>Home</h1>
        <Header />
      </div>
    </MainLayout>
  );
};

export default Home;
