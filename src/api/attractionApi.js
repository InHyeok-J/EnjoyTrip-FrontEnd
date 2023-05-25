import axios from "./axios";
import http from "./axios";
export const getGuguns = async (sidoCode) => {
  return (await http.get("/attractions/sidos/" + sidoCode)).data;
};

export const getHotAttraction = async () => {
  return (await http.get("/attractions/hot/")).data;
};

export const getDetail = async (attractionId) => {
  return (await http.get("/attractions/" + attractionId)).data;
};

export const getReviews = async (attractionId) => {
  return (await http.get("/attractions/" + attractionId + "/reviews")).data;
};

export const postReview = async (attractionId, payload) => {
  const url =
    process.env.VUE_APP_SERVER_URL +
    "/attractions/" +
    attractionId +
    "/reviews";
  return await axios.post(url, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
};

export const deleteReview = async (attractionId, reviewId) => {
  return await http.delete(
    "/attractions/" + attractionId + "/reviews/" + reviewId
  ).data;
};

export const search = async (params) => {
  console.log(params);
  let url = "/attractions/?";
  if (params.sidoCode) {
    url += `sidoCode=${params.sidoCode}&`;
  }

  if (params.gugunCode) {
    url += `gugunCode=${params.gugunCode}&`;
  }

  if (params.category) {
    url += `category=${params.category}&`;
  }

  if (params.title) {
    url += `title=${params.title}`;
    // url += `title=${encodeURIComponent(params.title)}&`;
  }
  const res = (await http.get(url)).data;
  return res;
};
