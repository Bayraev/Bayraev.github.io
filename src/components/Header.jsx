import React from 'react';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { switchRole } from '../app/features/userRoleSlice';
import { useNavigate } from 'react-router-dom';
import { changeProposalsChapterAction } from '../app/features/selectionIdOfProposal';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.userRole.isAdmin); // true/false

  // we need this to change visibility depending on
  // our role
  //! Кароче эта штука нужна, чтобы сразу убирала функционал админа или юзера соответсвенно
  //! Но валидации как таковой нет, да и вроде не это проверяли
  const handleSwitchRole = () => {
    if (isAdmin) {
      navigate('/newproposal');
    } else {
      navigate('/proposals');
    }
    dispatch(changeProposalsChapterAction(0));
    dispatch(switchRole());
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Life Game</div>
      <div className={styles.usability}>
        <button className="invis_button" onClick={() => handleSwitchRole()}>
          {' '}
          Switch Role{' '}
        </button>
        <div> {isAdmin ? 'admin ✓' : 'user ✕'} </div>
      </div>
    </div>
  );
};

export default Header;
