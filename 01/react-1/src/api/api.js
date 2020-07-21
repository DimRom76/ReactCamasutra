import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7d6419bc-c5cb-4da1-9cb1-3ea493a6d31c',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  //   follow(id) {
  //     return instance.post(`follow/${id}`).then(response => {
  //       return response.resultCode;
  //     });
  //   },
};
