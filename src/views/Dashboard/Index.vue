<template>
  <div class="w-full flex justify-end px-8 py-4 bg-white">
    <Button @click="showAddProject = !showAddProject" label="Add Project" icon="pi pi-plus" />
  </div>
  <div class="w-full grid grid-cols-5 gap-4 p-8 bg-white h-[80vh] overflow-auto">
    <article v-for="n in 10" :key="n" class="group h-[28rem] overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
    <img class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" />
    <div class="py-4 px-6">
      <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Project Name</h1>
      <p class="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat iure.</p>
    </div>
    <div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
      <div class="flex flex-wrap text-sm text-gray-500">
        <span class="mr-1">Created: Oct 30, 2022</span>
      </div>
      <div class="mt-1">
        <span class="mr-3 ml-auto inline-flex items-center gap-2 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
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
        <label for="username" class="font-semibold col-span-2">Project Name</label>
        <InputText id="username" class="flex-auto col-span-6" placeholder="(Required)" autocomplete="off" />
    </div>
    <div class="grid grid-cols-8 gap-4 mb-4">
        <label for="email" class="font-semibold col-span-2 w-24">Description</label>
        <Textarea v-model="value" class="w-full col-span-6" variant="filled" placeholder="(Optional)" rows="5" cols="30" />
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Add" @click="visible = false"></Button>
    </div>
</Dialog>

</template>


<script setup>
import { ref } from "vue";

const showAddProject = ref(false);
</script>
