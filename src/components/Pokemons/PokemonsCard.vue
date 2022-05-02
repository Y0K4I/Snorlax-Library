<template>
  <Card v-if="!isLoading">
    <template #header>
      <div class="p-card__image">
        <Image
          :src="props.card.image"
          v-if="props.card.image"
          width="96"
          height="96"
          alt="image not found!"
        />
        <img src="@/assets/images/npokemon.png" alt="ERROR!!!" v-else />
      </div>
    </template>
    <template #title>
      <div class="p-card__title">
        {{ pokemonName }}
      </div>
    </template>
    <template #subtitle>
      <div class="p-card__subtitle">
        <div
          class="p-card__subtitle__text"
          v-for="type in props.card.types"
          :key="type"
          :style="{ backgroundColor: TypesColors[type.type.name] }"
        >
          {{ type.type.name }}
        </div>
      </div>
    </template>
  </Card>
  <div class="skeleton-loading" v-else>
    <Skeleton size="250px" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";

import { IPokemonCard } from "@/types/pokemon";
import { TypesColors } from "@/assets/constants/typesColors";
import { useGlobalStore } from "@/store/global";

const props = defineProps<{
  card: IPokemonCard;
}>();

const globalStore = useGlobalStore();

const isLoading = ref(globalStore.isLoading);

const pokemonName = computed(() => {
  return props.card.name.charAt(0).toUpperCase() + props.card.name.slice(1);
});

// Unknown type of store callback params
globalStore.$subscribe((value: any) => {
  const { events } = value;
  if (events.key === "isLoading") {
    isLoading.value = events.newValue;
  }
});
</script>

<style scoped lang="scss">
.p-card {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  transition: 0.3s;
  border-radius: 15px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  }
  &__title {
    display: flex;
    justify-content: center;
  }
  &__subtitle {
    display: flex;
    justify-content: center;
    &__text {
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      padding: 2px;
      color: white;
      border-radius: 10px;
    }
  }
  &__image {
    padding-top: 30px;
    img {
      width: 96px;
      height: 96px;
    }
  }
}

.skeleton-loading {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  transition: 0.3s;
  border-radius: 15px;
}
</style>
