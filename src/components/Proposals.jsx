import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Complaint from './Complaint';
import { deleteUser } from '../app/features/usersReducer';

const Proposals = ({ styles }) => {
  const dispatch = useDispatch();
  // users array
  const users = useSelector((state) => state.usersReducer.users);

  // checking window tipa
  const [isOpened, setIsOpened] = useState(false); // answer to proposal window
  const [checkingData, setCheckingData] = useState(null); //! СОДЕРЖИТ МАССИВ КОТОРЫЙ ЗАЛИВАЕТСЯ В ГЛОБАЛЬНЫЙ СТЕЙТ
  // handler of "answer to proposal window"
  const checkingHandler = (user) => {
    setTimeout(() => {
      setIsOpened(true);
      setCheckingData(user);
    }, 400);
  };
  useEffect(() => {
    setIsOpened(false);
  }, [users]);

  return (
    <>
      {isOpened && <Complaint user={checkingData} />}

      <ol className={styles.proposals}>
        {users.map((user) => {
          return (
            <li
              key={user.id}
              onDoubleClick={() => dispatch(deleteUser(user.id))}
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
