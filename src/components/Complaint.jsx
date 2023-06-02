import React from 'react';
import styles from './Complaint.module.scss';
import { useDispatch } from 'react-redux';
import { changeStatusAction } from '../app/features/usersReducer';

const Complaint = (props) => {
  const dispatch = useDispatch();

  // this handlers makes status for proposal. Like, waiting for response, declined or accepted
  const acceptOrDeclineHandler = (action) => {
    // action is new status
    dispatch(changeStatusAction({ id: props.user.id, status: action }));
  };
  return (
    <div className={styles.complaint_block}>
      <h1> Proposal </h1>
      <div className={styles.complaint}>
        <div className={styles.user}>
          <span> {props.user.name}</span>
        </div>

        <div className={styles.block}>
          <div> description </div>
          <div className={styles.info}>
            <div className={styles.text}> {props.user.message}</div>
            <div className={styles.buttons}>
              <button onClick={() => acceptOrDeclineHandler('accepted')} className="full_button">
                Accept
              </button>
              <button onClick={() => acceptOrDeclineHandler('declined')} className="invis_button">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
