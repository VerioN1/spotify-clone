import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Search = React.lazy(() => import('@/pages/Search/Search'));

const Home = React.lazy(() => import('@/pages/Home/Home'));
const WithRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/Search"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Search />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default WithRouter;
