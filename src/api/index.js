import axios from 'axios';

export function useApi() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const apiToken = localStorage.getItem('api_token') ?? null;

  const headers = (auth) => {
    return {
      headers: auth ? {
         Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      } : {
        'Content-Type': 'application/json'
     }
    }
  };

  return {
    async get(api, auth = true) {
      const response = await axios.get(`${apiUrl}${api}`, headers(auth));
      return response.data;
    },

    async post(api, data, auth = true) {
      const response = await axios.post(`${apiUrl}${api}`, data, headers(auth));
      return response.data;
    },

    async put(api, data, auth = true) {
      const response = await axios.put(`${apiUrl}${api}`, data, headers(auth));
      return response.data;
    },

    async patch(api, data, auth = true) {
      const response =  await axios.patch(`${apiUrl}${api}`, data, headers(auth));
      return response.data;
    },

    async delete(api, data, auth = true) {
      const response = await axios.delete(`${apiUrl}${api}`, data, headers(auth));
      return response.data;
    },
  }
}



