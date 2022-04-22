import React, { FC } from 'react';

import './MainLayout.css';
import Sidebar from '@/widgets/Sidebar/Sidebar';

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-skeleton">
      <>
        <Sidebar />
      </>
      <>{children}</>
    </div>
  );
};

export default MainLayout;
