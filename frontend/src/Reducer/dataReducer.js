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

const currentUserP = JSON.parse(localStorage.getItem('currentUser'))
let currentUser = false
if (!currentUserP) {
  localStorage.setItem('currentUser', null)
} else if (currentUserP !== 'null') {
  currentUser = currentUserP
}


export const initialState = {
  users: isAuth,
  currRoom: null,
  auth: null,
  currUser: currentUser,
  reports:[],
  convos: [],
  messages: [],
  newRepo: false
};
