<template>
  <Paginator
    :rows="props.limit"
    :first="props.offset"
    :total-records="props.totalCards"
    :rowsPerPageOptions="[20, 30, 50]"
    @page="onPage($event)"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch } from "vue";

const props = defineProps<{
  limit: number;
  offset: number;
  totalCards: number;
  fetchPokemons: (limit: number, offset: number) => Promise<void>;
  fetchFilteredPokemons: (limit: number, offset: number) => Promise<void>;
  isFiltered: boolean;
}>();

const emit = defineEmits(["limit", "offset"]);

watch(props, () => {
  if (!props.isFiltered) {
    props.fetchPokemons(props.limit, props.offset);
  } else {
    props.fetchFilteredPokemons(props.limit, props.offset);
  }
});

const onPage = (event: any) => {
  emit("offset", event.first);
  emit("limit", event.rows);
};
</script>
