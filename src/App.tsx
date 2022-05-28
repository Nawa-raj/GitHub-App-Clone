import Footer from 'components/Footer';
import Header from 'components/Header';
import RepoDetails from 'pages/search/RepoDetails';
import SearchResult from 'pages/SearchResult';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <React.Fragment>

      {/* header */}
      <Header />

      {/* body part */}
      <div className='body_wrapper'>
        <Routes>
          <Route index element={<Dashboard />} />
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
