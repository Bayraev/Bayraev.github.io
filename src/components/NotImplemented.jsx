import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotImplemented = () => {
  const navigate = useNavigate(); // r-r-dom controling req

  // redirect
  useEffect(() => {
    setTimeout(() => {
      navigate('/proposals');
    }, 3000);
  }, [navigate]);

  return (
    <div>Эта страница не разработана! Функционал тот же, потому сейчас вас переадресует : ) </div>
  );
};

export default NotImplemented;
