import { useApi } from './index.js';

export function useAuth() {
  const api = useApi();
  return {
    async login(payload) {
      try {
        const data = await api.post('/login', payload, false);
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  };
}
