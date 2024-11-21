import axios from "axios";

const instanceAxios = axios.create({
  // Domain của API
  baseURL: "http://localhost:3000/",
  // Kiểu dữ liệu nhận vào và trả ra
  headers: {
    'Content-Type': 'application/json'
  },
});

// export instanceAxios để sử dụng như hằng số
export default instanceAxios;
