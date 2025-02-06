import axios from 'axios';

export function useApi() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  return {
    async get(api) {
      const response = await axios.get(`${apiUrl}${api}`)
      return response.data;
    },

    async post(api, data) {
      const response = await axios.post(`${apiUrl}${api}`, data);
      return response.data;
    },

    async put(api, data) {
      const response = await axios.put(`${apiUrl}${api}`, data);
      return response.data;
    },

    async patch(api, data) {
      const response = axios.patch(`${apiUrl}${api}`, data);
      return response.data;
    },

    async delete(api, data) {
      const response = await axios.delete(`${apiUrl}${api}`, data);
      return response.data;
    },
  }
}



