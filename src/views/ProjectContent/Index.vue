<template>
 <div class="w-full h-screen px-32 text-black py-8 bg-white overflow-auto">


  <Panel toggleable>
    <template #header>
        <div class="flex p-2 items-center gap-2">
          <h1 class="text-3xl font-bold">Project Name</h1>
        </div>
    </template>

    <template #icons>
        <Button class="mr-2" text icon="pi pi-pencil"  />
        <Button icon="pi pi-trash" text severity="danger" />
    </template>
    <div class="p-8">
    <p>Our innovative solutions are designed to streamline operations, enhance efficiency, and drive success. With a focus on quality and reliability, we provide cutting-edge technology tailored to meet your specific needs. Experience seamless integration and exceptional performance with our trusted services</p>

    <Image class="mt-4" src="/1.png" alt="Logo" width="250" preview />
        <div class="flex gap-2">
            <Button label="Upload Logo" icon="pi pi-upload" text severity="info" />
            <Button label="Remove Logo" text icon="pi pi-times" severity="danger" />
        </div>
  </div>
</Panel>

  <Accordion class="mt-4" value="0">
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
 </div>
</template>

<script setup>
const toggle = (event) => {
    menu.value.toggle(event);
};

</script>
