//! SLICES
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: 1,
      name: 'Lom-Ali',
      status: 'waiting',
      message:
        'Привет! Это разработчик. Ты сейчас в окне "предложения", которое ты должен принять или отклонить. Удалить это предложение можешь нажав дважды на элемент списка',
    },
    {
      id: 2,
      name: 'Lom-Ali',
      status: 'waiting', // accepted
      message:
        'Насколько я понял, не обязательно все было делать по макету, так что тут немного все иначе. Надеюсь, интерфейс интуитивно понятен. В любом случае, жду фидбек!',
    },
    {
      id: 2,
      name: 'Lom-Ali',
      status: 'waiting', // accepted
      message:
        'В этот список попадают так же ПРЕДЛОЖЕНИЯ, что отправляются от лица юзера, а не админа! Да, по итогу это не админ панель, а панель взаимодействия админа и юзера.',
    },
    {
      id: 3,
      name: 'Gigachad',
      status: 'accepted', // accepted
      message:
        ' BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED BASED  ',
    },
    {
      id: 4,
      name: 'Whart',
      status: 'declined', // accepted
      message:
        'kmkoasmdkmsakmd msajk mfsfajkfn sdkj ngfjsdn gmsd gs dnm fsdnfsdfknsdjng knsfkn f  sjdg kds gkjsdgjk nsd gjksdj gnsdn jnsdj ngs ndjn gj',
    },
    {
      id: 5,
      name: 'Poor one((',
      status: 'declined', // accepted
      message:
        'mjjsm jlam dlkm jmasj mm m j  mmjdlkm jmasj mm m j  mmjdlkm jmasj mm m j  mmjdlkm jmasj mm m j  mmjdlkm jmasj mm m j  mmjdlkm jmasj mm m j  mmjdlkm jmasj mm m j  mmj!',
    },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeStatusAction: (state, action) => {
      const { id, status } = action.payload; // destructuring payload
      const user = state.users.find((user) => user.id === id);

      if (user) {
        user.status = status; // mutating changing status of user
      }
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload); // filtering-deleting
    },
  },
});

export const { changeStatusAction, addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
