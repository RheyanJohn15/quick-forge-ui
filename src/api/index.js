import axios from 'axios';

export function useApi() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const apiToken = localStorage.getItem('api_token') ?? null;

  return {
    async get(api, auth = true) {
      const response = await axios.get(`${apiUrl}${api}`, auth ? { headers: { Authorization: `Bearer ${apiToken}` } }: {});
      return response.data;
    },

    async post(api, data, auth = true) {
      const response = await axios.post(`${apiUrl}${api}`, data, auth ? { headers: { Authorization: `Bearer ${apiToken}` } } : {});
      return response.data;
    },

    async put(api, data, auth = true) {
      const response = await axios.put(`${apiUrl}${api}`, data, auth ? { headers: { Authorization: `Bearer ${apiToken}` } } : {});
      return response.data;
    },

    async patch(api, data, auth = true) {
      const response = axios.patch(`${apiUrl}${api}`, data, auth ? { headers: { Authorization: `Bearer ${apiToken}` } } : {});
      return response.data;
    },

    async delete(api, data, auth = true) {
      const response = await axios.delete(`${apiUrl}${api}`, data, auth ? { headers: { Authorization: `Bearer ${apiToken}` } } : {});
      return response.data;
    },
  }
}



