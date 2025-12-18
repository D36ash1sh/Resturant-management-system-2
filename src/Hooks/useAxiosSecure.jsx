import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

// import PropTypes from 'prop-types';
const axiosSecure = axios.create({
  baseURL: `https://bistro-boss-restaurant-server-topaz.vercel.app`,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem("accessToken");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error?.response?.status;

      // Only log the user out on 401 (unauthorized / invalid token).
      // For 403 (forbidden) we keep them logged in and let the route guards handle access.
      if (status === 401) {
        try {
          await logOut();
          navigate("/login");
        } catch (e) {
          // optional: log error, but don't break the original promise chain
          console.error("Error during automatic logout:", e);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

useAxiosSecure.propTypes = {};

export default useAxiosSecure;
