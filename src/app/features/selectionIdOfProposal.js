import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  chapter: 0,
};

export const changeProposalsChapterAction = createAction('chapter/change');

const changeSelectionIdOfProposal = createReducer(initialState, (builder) => {
  builder.addCase(changeProposalsChapterAction, (state, action) => {
    return { chapter: action.payload };
  });
});

export default changeSelectionIdOfProposal;
