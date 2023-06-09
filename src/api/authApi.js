import http from './axios';

export const postEmailCode = async email => {
	return (
		await http.post('/auth/history', {
			email,
		})
	).data;
};

export const postEmailCheck = async (email, authCode) => {
	return (await http.post('/auth/history/check', { email, authCode })).data;
};

export const postLogin = async (email, password) => {
	return (await http.post('/auth/login', { email, password })).data;
};

export const getLogout = async () => {
	await http.get('/auth/logout');
};

export const postOAuthLogin = async (code) => {
  return (await http.post("/oauth/kakao", { code })).data;
};

export const postOAuthSignUp = async (nickname, provider) => {
  return (await http.post("/oauth/signup", { nickname, provider })).data;
};
