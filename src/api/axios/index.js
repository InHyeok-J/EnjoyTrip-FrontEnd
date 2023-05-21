import axios from 'axios';

// 사용자 정의 axios 객체를 만드는 작업
export default axios.create({
<<<<<<< HEAD
	baseURL: process.env.VUE_APP_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
=======
  baseURL: process.env.VUE_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
>>>>>>> f90360db6c792dc5bf68c57a6baa90f1a3fc32f8
});
