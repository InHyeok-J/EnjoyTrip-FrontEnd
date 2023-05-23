import http from "./axios";

export const getGuguns = async (sidoCode) => {
  return (await http.get("/attractions/sidos/" + sidoCode)).data;
};
