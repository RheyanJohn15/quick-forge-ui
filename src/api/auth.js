import { useApi } from './index.js';

export function useAuth() {
  const api = useApi();
  return {
    async login() {
      try {
        const data = await api.get('/login');
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  };
}
