import axios from 'axios';

export const BASE_URL =
  'http://ec2-35-156-139-210.eu-central-1.compute.amazonaws.com/api';

export const instance = axios.create({
  baseURL: BASE_URL,
});

const token = {
  set(token: string) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async (registerData: string) => {
  const { data } = await instance.post(`$/users/`, registerData);
  token.set(data.tokens.access);
  return data.user;
};

export const loginUser = async (loginData: string) => {
  const { data } = await instance.post(`$/token/`, loginData);
  token.set(data.tokens.access);
  return data.user;
};

// export const logout = async () => {
//   const { data } = await instance.get('/logout'); // endpoint is not created yet
//   token.unset();
//   return data;
// };

export const fetchUsers = async () => {
  const { data } = await instance.get(`$/users/`);
  return data.results;
};

export const fetchUserById = async (id: string) => {
  const { data } = await instance.get(`/users/{id}`);
  return data.results;
};

export const updateUser = async (id: string, userData: string) => {
  const { data } = await instance.put(`/users/{id}`, userData);
  return data.results;
};

export const updateUserPartially = async (id: string, userData: string) => {
  const { data } = await instance.patch(`/users/{id}`, userData);
  return data.results;
};

export const deleteUser = async (id: string) => {
  const { data } = await instance.delete(`/users/{id}`);
  return data.results;
};
