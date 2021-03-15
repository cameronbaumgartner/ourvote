import React, { useReducer, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';
import AboutUs from './AboutUs';
import { HomeContext } from '../state/contexts';
import { initialHomeState, homeReducer } from '../state/reducers';

const Home = () => {
  const [homeState, homeDispatch] = useReducer(homeReducer, initialHomeState);

  return (
    <HomeContext.Provider
      value={{
        homeState,
        homeDispatch,
      }}
    >
      <Navbar />
      <SearchBar />
      <div className="homeContents">
        {homeState.aboutUs ? <AboutUs /> : <SearchResults />}
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
