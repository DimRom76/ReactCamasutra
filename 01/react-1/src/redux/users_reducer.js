const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      photoUrl:
        "https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",
      fullName: "Dmitriy",
      status: "boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      followed: false,
      photoUrl:
        "https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",
      fullName: "Sveta",
      status: "menedger",
      location: { city: "Kiev", country: "Ukraine" },
    },
    {
      id: 3,
      followed: true,
      photoUrl:
        "https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",
      fullName: "Lena",
      status: "menedger",
      location: { city: "Summi", country: "Ukraine" },
    },
    {
      id: 4,
      followed: true,
      photoUrl:
        "https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",
      fullName: "Sergey",
      status: "programmer",
      location: { city: "Kharkiv", country: "Ukraine" },
    },
    {
      id: 5,
      followed: false,
      photoUrl:
        "https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",
      fullName: "Anna",
      status: "programmer",
      location: { city: "Moskow", country: "Russia" },
    },
    {
      id: 6,
      followed: true,
      photoUrl:
        "https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",
      fullName: "Maksim",
      status: "programmer",
      location: { city: "Petergof", country: "Russia" },
    },
    {
      id: 7,
      followed: true,
      photoUrl:
        "https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",
      fullName: "Dmitriy",
      status: "cleaner",
      location: { city: "Minsk", country: "Belarus" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  //для того чтобы Реакт понял что данные изменились нужно поменять ссылку на объект, создать его полную копию

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          //map перебирает весь массив
          if (u.id === action.userId) {
            return { ...u, followed: true }; //находим по id конкретного пользователя, меняем ему followed и возвращаем новый объект
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          //map перебирает весь массив
          if (u.id === action.userId) {
            return { ...u, followed: false }; //находим по id конкретного пользователя, меняем ему followed и возвращаем новый объект
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }; //добавляем пользователей которые пришли в акшене к тем что у же есть в стате
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;
