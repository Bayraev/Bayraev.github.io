import React, { useState } from 'react';
import styles from './LeftBar.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeProposalsChapterAction } from '../app/features/selectionIdOfProposal';

const LeftBar = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.userRole.isAdmin);
  const selected = useSelector(
    (state) => state.selectRoleAndFeaturesReducer.changeProposalsChapterAction,
  );
  const admin_list = ['Proposals', 'Users', 'Fetched']; // admin panel

  const user_list = ['New Proposal', 'My Requests', 'Fetched']; // user panel

  return (
    <div className={styles.left_bar}>
      {isAdmin ? (
        <ol>
          {admin_list.map((e, i) => {
            //!
            return (
              // Тут сравнение индекса из общего стейта (чтобы получать к этим данным доступ с правого сайдбара)
              //! ЭТО ЛЕВЫЙ САЙДБАР АДМИНА
              <li className={selected === i && styles.selected}>
                <Link to={'/' + e.toLowerCase()}>
                  <button
                    className={styles.state}
                    onClick={() => dispatch(changeProposalsChapterAction(i))}>
                    {e}
                  </button>
                </Link>
              </li>
            );
          })}
        </ol>
      ) : (
        <ol>
          {user_list.map((e, i) => {
            const link = e.replace(/ /g, '').toLowerCase(); // removing space between link
            //! ЭТО ЛЕВЫЙ САЙДБАР ЮЗЕРА
            return (
              // Тут сравнение индекса из общего стейта (чтобы получать к этим данным доступ с правого сайдбара)
              <li className={selected === i && styles.selected}>
                <Link to={'/' + link}>
                  <button
                    className={styles.state}
                    onClick={() => dispatch(changeProposalsChapterAction(i))}>
                    {e}
                  </button>
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default LeftBar;
