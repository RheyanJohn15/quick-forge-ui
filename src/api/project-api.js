import { useApi } from './index.js';

export function projectApi() {
  const api = useApi();
  return {
    async add(payload) {
      const data = await api.post('/projects/add', payload);
      return data;
    },

    async list(){
      const data = await api.get('/projects/list');
      return data;  
    }
  };
}
