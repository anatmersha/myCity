export const Reducer = (state, action) => {
  const { type, value } = action;
  return { ...state, [type]: value };
};

export const initialState = {
  users: {},
  currRoom: null,
  auth: null,
  currUser: null,
  reports:[]
};
