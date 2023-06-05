import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Complaint from './Complaint';
import { deleteUser } from '../app/features/usersReducer';

const Proposals = ({ styles }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.root.usersReducer.users); // users from global state

  const [isOpened, setIsOpened] = useState(false); // window for response (to proposal)
  const [checkingData, setCheckingData] = useState(null); // it will contain one User, who about to use in 'window for response'
  const [clickCount, setClickCount] = useState(0); // how times clicked proposal (to check double clicks and single)

  const checkingHandler = (user) => {
    setClickCount((prevCount) => prevCount + 1); // catching clicks
    setCheckingData(user);
  };

  useEffect(() => {
    let timeout;

    if (clickCount === 1) {
      timeout = setTimeout(() => {
        setIsOpened(true);
        setClickCount(0);
      }, 300); // if in 300 ms we dont click seconnd time
    } else if (clickCount === 2) {
      clearTimeout(timeout);
      dispatch(deleteUser(checkingData.id));
      setClickCount(0);
    } // clears and timeout and click count

    return () => {
      clearTimeout(timeout);
    };
  }, [clickCount, checkingData, dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 100);
  }, [users]);

  return (
    <>
      {isOpened && <Complaint user={checkingData} />}

      <ol className={styles.proposals}>
        {users.map((user) => {
          return (
            <li
              key={user.id}
              onDoubleClick={() => setClickCount(2)}
              onClick={() => checkingHandler(user)}>
              <span>{user.name}</span>
              <div
                className={
                  (user.status === 'accepted' && styles.accepted) ||
                  (user.status === 'declined' && styles.declined) ||
                  (user.status === 'waiting' && styles.waiting)
                }></div>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Proposals;
