import axios, { AxiosResponse } from "axios";
import { HOST } from "../../config";
import { User } from "../types/types";
import { getSession } from "../utils/authKeyStorageService";

export const signup = (
  name: string,
  password: string
): Promise<AxiosResponse<{ id: string }>> => {
  return axios.post(`${HOST}/api/registration/signup`, {
    name,
    password,
    age: 0,
    email: name,
  });
};

export const getAccountInfo = (): Promise<AxiosResponse<User>> => {
  const session = getSession();

  return axios.get(`${HOST}/api/private/users/me`, {
    headers: {
      "x-access-login": session?.login || "",
      "x-access-password": session?.password || "",
    },
  });
};

// const myPost = (url: string) => {
//   return new Promise((resolve, reject) => {
//     console.log("LONG ACTION");

//     resolve("DONE");
//     reject("ERROR");
//   });
// };

// myPost("ulr")
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(console.error);
