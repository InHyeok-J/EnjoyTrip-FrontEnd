import http from "./axios";

export const getGuguns = async (sidoCode) => {
  return (await http.get("/attractions/sidos/" + sidoCode)).data;
};

export const search = async (params) => {
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
    url += `title=${params.title}&`;
    // url += `title=${encodeURIComponent(params.title)}&`;
  }
  console.log(url);
  return (await http.get(url)).data;
};
