import { configureStore } from '@reduxjs/toolkit';
import changeSelectionIdOfProposal from './features/selectionIdOfProposal';
import usersReducer from './features/usersReducer';
import userRoleSlice from './features/userRoleSlice';
import FetchSmthSlice from './features/FetchSmthSlice';

export const store = configureStore({
  reducer: {
    selectRoleAndFeaturesReducer: changeSelectionIdOfProposal, // its changing id of proposal selections
    usersReducer: usersReducer, // all requests here
    userRole: userRoleSlice, // switching roles here and "my reqs"
    fetchSlice: FetchSmthSlice,
  },
});
