import React from 'react';
import { useSelector } from 'react-redux';

const MyRequests = () => {
  //! ЭТО МЕСТЕЧКО ГДЕ ОТОБРАЖАЮТСЯ ТОЛЬКО СВОИ РЕКВЕСТЫ ЮЗЕРА
  const myReqs = useSelector((state) => state.userRole.myRequests);
  // it cuts text to 50 symbols
  function truncateMessage(message) {
    if (message.length <= 50) {
      return message;
    } else {
      return message.slice(0, 50) + '...';
    }
  }
  return (
    <div>
      Не забудьте добавить новые предложения в New Proposal, данные не сохранены в localstorage или
      где-либо еще!
      <ol>
        {myReqs.map((e) => {
          const cuttedMessage = truncateMessage(e.message);
          return (
            <li>
              {e.name}: {cuttedMessage}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default MyRequests;
