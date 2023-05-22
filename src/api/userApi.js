import http from "./axios";
import axios from "axios";

export const postSignUp = async (payload) => {
  await http.post("/user/signup", payload);
};

export const getUserInfo = async () => {
  return (await http.get("/user")).data;
};

// eslint-disable-next-line no-unused-vars
export const patchUserProfile = async (nickname, image) => {
  let formData = new FormData();
  formData.append("nickname", nickname);
  formData.append("image", image);
  console.log(formData);
  return (
    await axios.patch(process.env.VUE_APP_SERVER_URL + "/user", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
  ).data;
};

export const deleteUser = async () => {
  return (await http.delete("/user/signout")).data;
};
