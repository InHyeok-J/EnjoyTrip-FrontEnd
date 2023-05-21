import userConstant from "./constants/userConstant";
import { getUserInfo } from "@/api/userApi";
const blankUser = {
  id: null,
  email: null,
  nickname: null,
  profileImg: null,
  provider: null,
  createdAt: null,
};
const USER_KEY = "trify-user";
const initStore = () => {
  if (localStorage.getItem(USER_KEY) === "undefined") {
    localStorage.setItem(USER_KEY, JSON.stringify(blankUser));
  }
  const stringUser = localStorage.getItem(USER_KEY); //string type
  const user = JSON.parse(stringUser);
  return user;
};

const userStore = {
  namespaced: true,
  state: initStore(),
  actions: {
    [userConstant.ACTION_USER_INFO]: async ({ commit }) => {
      const response = await getUserInfo();
      commit(userConstant.MU_USER_INFO, response.data);
    },
  },
  mutations: {
    [userConstant.MU_USER_INFO]: (state, payload) => {
      const payloadToString = JSON.stringify(payload);
      localStorage.setItem(USER_KEY, payloadToString);
      state.user = initStore();
    },
    [userConstant.MU_INIT_USER_INFO]: (state) => {
      const blackUserToString = JSON.stringify(blankUser);
      localStorage.setItem(USER_KEY, blackUserToString);

      // eslint-disable-next-line no-unused-vars
      state = blankUser;
    },
  },
};
export default userStore;
