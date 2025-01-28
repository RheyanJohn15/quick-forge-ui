import axios from 'axios'
export function useApi() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  return {
    get(api) {
      axios
        .get(`${apiUrl}${api}`)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
    },

    post(api, data) {
      axios
        .post(`${apiUrl}${api}`, data)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
    },

    put(api, data) {
      axios
        .put(`${apiUrl}${api}`, data)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
    },

    patch(api, data) {
      axios
        .patch(`${apiUrl}${api}`, data)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
    },

    delete(api, data) {
      axios
        .delete(`${apiUrl}${api}`, data)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
    },
  }
}
