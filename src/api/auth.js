import { useApi } from './index.js';

export function useAuth() {
  const api = useApi();
  return {
    async login() {
        const data = api.get('/login'); 
        return data; 
    },
  };
}