import Footer from 'components/Footer';
import Header from 'components/Header';
import RepoDetails from 'pages/search/RepoDetails';
import SearchResult from 'pages/search';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageIndex from './pages';


function App() {
  return (
    <React.Fragment>

      {/* header */}
      <Header />

      {/* body part */}
      <div className='body_wrapper'>
        <Routes>
          <Route index element={<PageIndex />} />
          <Route path="/search/:slug" element={<SearchResult />} />
          <Route path="/repositories-details/:slug" element={<RepoDetails />} />
        </Routes>
      </div>

      {/* footer */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
