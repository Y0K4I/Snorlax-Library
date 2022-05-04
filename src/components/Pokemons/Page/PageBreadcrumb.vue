<template>
  <Breadcrumb :home="breadcrumb.home" :model="breadcrumb.items" />
</template>

<script setup lang="ts">
import { reactive, defineProps } from "vue";

const props = defineProps<{
  name: string;
}>();

const breadcrumb = reactive({
  home: { icon: "pi pi-book", to: "/" },
  items: [{ label: props.name }],
});
</script>

<style scoped lang="scss"></style>
