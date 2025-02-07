import axios from 'axios';

export function useApi() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const getApiToken = () => localStorage.getItem('api_token') ?? null;

  const headers = (auth) => {
    const apiToken = getApiToken();

    return {
      headers: auth
        ? {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          }
        : {
            'Content-Type': 'application/json',
          },
    };
  };

  const handleError = (error) => {
    if (error.response) {
      const { success, message, action, error: errorDetails, timestamp } = error.response.data;

      return {
        success,
        message,
        action,
        error: errorDetails,
        timestamp,
        status: error.response.status,
      };
    }
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: error.message || 'Unknown error',
      status: 500,
    };
  };

  return {
    async get(api, auth = true) {
      try {
        const response = await axios.get(`${apiUrl}${api}`, headers(auth));
        return response.data;
      } catch (error) {
        return handleError(error);
      }
    },

    async post(api, data, auth = true) {
      try {
        const response = await axios.post(`${apiUrl}${api}`, data, headers(auth));
        return response.data;
      } catch (error) {
        return handleError(error);
      }
    },

    async put(api, data, auth = true) {
      try {
        const response = await axios.put(`${apiUrl}${api}`, data, headers(auth));
        return response.data;
      } catch (error) {
        return handleError(error);
      }
    },

    async patch(api, data, auth = true) {
      try {
        const response = await axios.patch(`${apiUrl}${api}`, data, headers(auth));
        return response.data;
      } catch (error) {
        return handleError(error);
      }
    },

    async delete(api, data, auth = true) {
      try {
        const response = await axios.delete(`${apiUrl}${api}`, { data }, headers(auth));
        return response.data;
      } catch (error) {
        return handleError(error);
      }
    },
  };
}
