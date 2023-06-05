import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../app/features/FetchSmthSlice';

const Fetched = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const fetched = useSelector((state) => state.root.fetchSlice);

  //! Тут у нас просто показать что владею санками. Полноценного крада нет, но я умею. Так же на бекенде работал
  return (
    <div>
      <h3>Так же пользуюсь Thunk Api (CRUD). Чтобы моя кандидатура была привлекательнее :) </h3>

      {fetched.loading ? 'pending..' : null}
      {fetched.rejected && 'Rejected'}

      {fetched.data.map((user) => {
        return (
          <>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
            <hr></hr>
          </>
        );
      })}
    </div>
  );
};

export default Fetched;
