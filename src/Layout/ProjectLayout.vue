<template>
  <Tabs value="/project-content/:id">
    <TabList>
        <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
            <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
                    <i :class="tab.icon" />
                    <span>{{ tab.label }}</span>
                </a>
              </router-link>

        </Tab>
    </TabList>
    <router-view></router-view>
</Tabs>

</template>
<script setup>
import { ref } from "vue";

const items = ref([
    { route: '/project-content/:id', label: 'Project Details', icon: 'pi pi-folder-open' },
    { route: '/transactions', label: 'Settings', icon: 'pi pi-cog' },
    { route: '/products', label: 'Manage Team', icon: 'pi pi-users' },
    { route: '/', label: 'Return Home', icon: 'pi pi-home' }
]);
</script>
