import api from "./api.service";

export const postLogin = async (data) => {
  return await api.post("login", data);
};

export const postRegister = async (data) => {
  return await api.post("register", data);
};
