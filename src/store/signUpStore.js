import signUpConstant from "./constants/signUpConstant";
const initStore = {
  process: 1,
  email: null,
  password: null,
  nickname: null,
};

const signUpStore = {
  namespaced: true,
  state: initStore,
  getters: {
    [signUpConstant.GET_PROCESS]: (state) => {
      return state.process;
    },
    [signUpConstant.GET_SIGNUP_IFNO]: (state) => {
      return {
        email: state.email,
        password: state.password,
        nickname: state.nickname,
      };
    },
  },
  mutations: {
    [signUpConstant.MU_EMAIL_PASSWORD]: (state, payload) => {
      state.email = payload.email;
      state.password = payload.password;
    },
    [signUpConstant.INIT_SIGNUP_STORE]: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initStore;
    },
  },
};

export default signUpStore;
