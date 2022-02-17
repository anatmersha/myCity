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

export const initialState = {
  users: isAuth,
  currRoom: null,
  auth: null,
  currUser: {
    _id: "ObjectId(620dac5d90dc9dcf97bc3d24)",
    firstName: "גל",
    lastName: "אטנאו",
    idCard: "111",
    city: "בתים",
    email: "falCc@gal.com",
    entity: 'user',
},
  reports:[],
  convos: [],
  messages: []
};
