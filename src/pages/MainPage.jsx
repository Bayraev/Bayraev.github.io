import React, { useEffect } from 'react';
import styles from './MainPage.module.scss';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default MainPage;
