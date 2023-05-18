import http from "./axios";

export const postSignUp = async (payload) => {
  await http.post("/user/signup", payload);
};
