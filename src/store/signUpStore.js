import signUpConstant from './constants/signUpConstant';
const initStore = {
<<<<<<< HEAD
	process: 1,
	email: null,
	password: null,
	nickname: null,
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
		[signUpConstant.INIT_SIGNUP_STORE]: state => {
			// eslint-disable-next-line no-unused-vars
			state = initStore;
		},
		[signUpConstant.MU_PROCESS]: (state, payload) => {
			state.process = payload.process;
		},
	},
=======
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
>>>>>>> f90360db6c792dc5bf68c57a6baa90f1a3fc32f8
};

export default signUpStore;
