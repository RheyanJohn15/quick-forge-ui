import { useToast } from 'primevue/usetoast';

export function notify(res){
  const toast = useToast();

  if(res.success){
    toast.add({ severity: 'success', summary: res.action, detail: res.message, life: 3000 });
  }else{
    toast.add({ severity: 'error', summary: res.action, detail: res.message, life: 3000 });
  }
}
