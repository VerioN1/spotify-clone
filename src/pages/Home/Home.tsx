import React, { useEffect, useState } from 'react';

import CustomSelect from '@/features/CustomSelect';
import { FAKE_DATA } from '@/features/mock';
import MainLayout from '@/shared/Layout/MainLayout';
import Header from '@/widgets/Header/Header';
import ProductsSection from '@/widgets/ProductsSection/ProductsSection';

const Home = () => {
  const [data, setData] = useState(FAKE_DATA);
  useEffect(() => {
    const dups = new Set();
    const newnewDAta = [];
    const newData = FAKE_DATA.map((item) => {
      if (dups.has(item.value)) {
        return { ...item, label: `${item.label} - ${item.description}` };
      }
      newnewDAta.push(item);
      dups.add(item.value);
      return item;
    });
    setData(newnewDAta);
  }, []);

  return (
    <MainLayout>
      <div>
        <CustomSelect data={data} />
        <Header />
        <ProductsSection />
      </div>
    </MainLayout>
  );
};

export default Home;
