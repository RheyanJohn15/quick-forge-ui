import axios from 'axios';

export function useApi() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const getApiToken = () => localStorage.getItem('api_token') ?? null;

  const headers = (auth) => {
    const apiToken = getApiToken();

    const headers = auth
    ? {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      }
    : {
        'Content-Type': 'application/json',
      };

      return { headers };
  };

  const handleError = (error) => {
    console.error('API request failed:', error.response || error);
    throw error;
  };

  return {
    async get(api, auth = true) {
      try {
        const response = await axios.get(`${apiUrl}${api}`, headers(auth));
        return response.data;
      } catch (error) {
        handleError(error);
      }
    },

    async post(api, data, auth = true) {
      try {
        const response = await axios.post(
          `${apiUrl}${api}`,
          data,
          headers(auth)
        );
        return response.data;
      } catch (error) {
        handleError(error);
      }
    },

    async put(api, data, auth = true) {
      try {
        const response = await axios.put(
          `${apiUrl}${api}`,
          data,
          headers(auth)
        );
        return response.data;
      } catch (error) {
        handleError(error);
      }
    },

    async patch(api, data, auth = true) {
      try {
        const response = await axios.patch(
          `${apiUrl}${api}`,
          data,
          headers(auth)
        );
        return response.data;
      } catch (error) {
        handleError(error);
      }
    },

    async delete(api, data, auth = true) {
      try {
        const response = await axios.delete(
          `${apiUrl}${api}`,
          { data },
          headers(auth)
        );
        return response.data;
      } catch (error) {
        handleError(error);
      }
    },
  };
}
