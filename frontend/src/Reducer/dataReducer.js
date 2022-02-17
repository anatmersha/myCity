export const Reducer = (state, action) => {
  const { type, value } = action;
  return { ...state, [type]: value };
};

const email = localStorage.getItem('user')
let isAuth = false
if (!email) {
  localStorage.setItem('user', null)
} else if (email !== 'null') {
  isAuth = true
}
const currentUserP = localStorage.getItem('user')
let currentUser = false
if (!email) {
  localStorage.setItem('user', null)
} else if (email !== 'null') {
  currentUser = true
}

export const initialState = {
  users: isAuth,
  currRoom: null,
  auth: null,
  currUser: null,
  reports:[],
  convos: [],
  messages: []
};
