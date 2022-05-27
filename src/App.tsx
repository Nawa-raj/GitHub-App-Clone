import Header from 'components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function App() {

  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/welcome" element={<h1>Welcome  to git clone</h1>} />
        {/* <Route path="/" element={<App />}>
       
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
