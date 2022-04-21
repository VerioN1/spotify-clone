import React from 'react';

import './MainLayout.css';
import Sidebar from '@/widgets/Sidebar/Sidebar';

const MainLayout = () => {
  return (
    <div className="main-skeleton">
      <>
        <Sidebar />
      </>
      <div></div>
    </div>
  );
};

export default MainLayout;
