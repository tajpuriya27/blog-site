import axios from "axios";

const baseUrl = "/api/login";

export const loginUsr = (inputUsr) =>
  axios.post(baseUrl, inputUsr).then((res) => res.data);
