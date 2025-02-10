<template>
  <div class="w-full flex justify-end gap-4 px-8 py-4 bg-white">
    <Button @click="showAddProject = !showAddProject" label="Add Project" icon="pi pi-plus" />
    <FloatLabel class="w-full md:w-56" variant="in">
    <Select v-model="workspaceList" inputId="in_label" :options="workspaceList" optionLabel="ws_name" class="w-full" variant="filled" />
    <label for="in_label">Workspaces</label>
</FloatLabel>
  </div>
  <div class="w-full grid grid-cols-5 gap-4 p-8 bg-white ">
    <article v-for="project in projectList" :key="project.proj_id"
      class="group h-[25rem] overflow-hidden rounded-lg border-2 border-gray-200 relative border-opacity-60 shadow-lg">
      <img
        class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
        src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="blog" />
      <div class="py-4 px-6">
        <h1
          class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
          {{ project.project_name }}</h1>
        <p class="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">{{
          project.project_description
         }}</p>
      </div>
      <div class="flex flex-wrap items-center justify-between px-6 pt-1 absolute bottom-0 left-0 w-full pb-4">
        <div class="flex flex-wrap text-sm text-gray-500">
          <span class="mr-1">{{ project.created_at }}</span>
        </div>
        <div class="mt-1">
          <span
            class="mr-3 ml-auto inline-flex items-center gap-2 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
            <i class="pi pi-download"></i>
            3.5K
          </span>
        </div>
      </div>
    </article>

  </div>

  <Dialog v-model:visible="showAddProject" modal header="Add Project" class="w-1/3">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Start your boiler plate project from here.</span>
    <div class="grid grid-cols-8 gap-4 mb-4">
      <label for="name" class="font-semibold col-span-2">Project Name</label>
      <InputText id="name" v-model="name" class="flex-auto col-span-6" placeholder="(Required)" autocomplete="off" />
    </div>
    <div class="grid grid-cols-8 gap-4 mb-4">
      <label for="description" class="font-semibold col-span-2 w-24">Description</label>
      <Textarea v-model="description" class="w-full col-span-6" variant="filled" id="description" placeholder="(Optional)" rows="5"
        cols="30" />
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="showAddProject = false"></Button>
      <Button type="button" label="Add" :loading="addProjectLoading" @click="addProject"></Button>
    </div>
  </Dialog>

</template>


<script setup>
import { ref, onMounted } from "vue";
import { projectApi } from "@/api/project-api";
import { notify } from "@/utils/notif";
import { useToast } from 'primevue/usetoast';

const showAddProject = ref(false);
const projApi = projectApi();
const toast = useToast();

const name = ref('');
const description = ref('');
const addProjectLoading = ref(false);

const projectList = ref([]);
const workspaceList = ref([]);

async function addProject(){
  addProjectLoading.value = true;

  const data = {
    'name' : name.value,
    'description': description.value
  }

  const res = await projApi.add(data);

  if(res.success){
    showAddProject.value = false;
    name.value = '';
    description.value = '';
  }
  addProjectLoading.value = false;
  notify(res, toast);
  loadProjects();
}

onMounted(()=> {
  loadProjects();
  loadWorkspace();
});

async function loadWorkspace(){
  const res = await projApi.workspace();
  console.log(res);
  workspaceList.value = res.result;
}

async function loadProjects(){
  const res = await projApi.list();
  projectList.value = res.result;
}

</script>
