import { useAuth } from "../context/AuthContext";

export const useApi = () => {
  const { handleTokenExpiration } = useAuth();

  const fetchWithToken = async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 401) {
        // Token expired
        handleTokenExpiration();
        throw new Error("Token expired");
      }

      return response;
    } catch (error) {
      if (error.message === "Token expired") {
        throw error;
      }
      throw new Error("Network error");
    }
  };

  return { fetchWithToken };
};