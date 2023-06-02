import React, { useState, useEffect, useRef } from 'react';
import styles from './NewProposal.module.scss';
import { useDispatch } from 'react-redux';
import { newRequest } from '../app/features/userRoleSlice';
import { addUser } from '../app/features/usersReducer';

const NewProposal = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(''); // input of name
  const [message, setMessage] = useState(''); // message textarea
  const textareaRef = useRef(null); // ref for textarea

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  // sizing of textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    // a bit validation...
    if (name && message) {
      function generator() {
        return Math.floor(Math.random() * 9000) + 1000;
      }
      const newId = generator();
      const newUser = {
        id: newId,
        name: name,
        status: 'waiting',
        message: message,
      };

      dispatch(newRequest(newUser));
      dispatch(addUser(newUser));
      alert('Success!');
    } else {
      alert('Error! Empty Fields!');
    }
    setMessage(''); // set only message
  };

  return (
    <div className={styles.newProposal}>
      <div>
        Тут с каждым запросом создается новый "юзер", которых можно видеть из админ панели. Так же
        все свои запросы можно видеть в MyRequests
      </div>
      <form action="submit" onSubmit={(e) => handlSubmit(e)}>
        <div className={styles.field}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <textarea
            ref={textareaRef}
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="full_button">send proposal</button>
      </form>
    </div>
  );
};

export default NewProposal;
