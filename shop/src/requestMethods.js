import axios from "axios";

const BASE_URL="http://localhost:5000/api"
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2JkMjVmODZhMWJiNzBmYWQyYzY1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDA5Njk4OCwiZXhwIjoxNjcwNDQyNTg4fQ.0DFoyASD-scy1uV-LuiO_cokL50KO0bMz24uJQxVZ-w"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});