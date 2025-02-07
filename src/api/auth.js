import { useApi } from './index.js';

export function useAuth() {
  const api = useApi();
  return {
    async login(payload) {
      const data = await api.post('/login', payload, false);
        return data;
    },
  };
}
