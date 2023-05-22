import signUpConstant from "./constants/signUpConstant";
const initStore = {
  process: 1,
  email: null,
  password: null,
  nickname: null,
  provider: null,
};

const signUpStore = {
  namespaced: true,
  state: initStore,
  getters: {},
  mutations: {
    [signUpConstant.MU_EMAIL_PASSWORD]: (state, payload) => {
      state.email = payload.email;
      state.password = payload.password;
      state.process = payload.process;
    },
    [signUpConstant.INIT_SIGNUP_STORE]: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initStore;
    },
    [signUpConstant.MU_PROCESS]: (state, payload) => {
      state.process = payload.process;
    },
    [signUpConstant.MU_OAUTH_INFO]: (state, payload) => {
      state.process = payload.process;
      state.provider = payload.provider;
    },
  },
};

export default signUpStore;
