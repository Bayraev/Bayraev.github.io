import React from 'react';
import styles from './RightBar.module.scss';
import Proposals from './Proposals';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewProposal from './NewProposal';
import NotImplemented from './NotImplemented';
import MyRequests from './MyRequests';
import Fetched from './Fetched';

const RightBar = () => {
  return (
    <div className={styles.right_bar}>
      <Routes>
        <Route
          path="/proposals"
          element={
            <div className={styles.proposals_block}>
              <Proposals styles={styles} />
            </div>
          }
        />
        <Route path="/" element={<Navigate to="/proposals" />} />
        <Route path="/newproposal" element={<NewProposal />} />
        <Route path="/users" element={<NotImplemented />} />
        <Route path="/myrequests" element={<MyRequests />} />
        <Route path="/fetched" element={<Fetched />} />
      </Routes>
    </div>
  );
};

export default RightBar;
