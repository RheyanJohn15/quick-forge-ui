<template>
   <Menubar :model="items" >
    <template #end>
      <Avatar image="/bg-2.png" class="mr-2 cursor-pointer" size="xlarge" shape="circle" />
    </template>
   </Menubar>
  <router-view></router-view>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Projects',
        icon: 'pi pi-folder-open'
    },
    {
        label: 'Teams',
        icon: 'pi pi-users'
    },
    {
        label: 'Help & Support',
        icon: 'pi pi-question-circle',
        items: [
            {
                label: 'Donate',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Report a bug',
                icon: 'pi pi-exclamation-triangle'
            },
            {
                label: 'About Us',
                icon: 'pi pi-info-circle'
            },

        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-cog'
    },
    {
        label: 'Admin Management',
        icon: 'pi pi-user-plus'
    }
]);
</script>
