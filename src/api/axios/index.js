import axios from 'axios';

// 사용자 정의 axios 객체를 만드는 작업
export default axios.create({
	baseURL: process.env.VUE_APP_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
