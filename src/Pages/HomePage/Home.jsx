import React from 'react';
import './Home.css';
import MainBtn from '../../Components/MainBtn/MainBtn';

import './Home.css';
import BgImg from './../../Components/BgImg/BgImg';
import logo from '../../assests/Logo.png';

const Home = () => {
  return (
    <main>
      <MainBtn shadow={false}> Login </MainBtn>
      <BgImg src={logo} />
    </main>
  );
};

export default Home;
