<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.label">
        <router-link :to="item.to">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class HeaderNav extends Vue {
  items = [
    { label: "Pokedex", icon: "pi pi-book", to: "/" },
    { label: "Info", icon: "pi pi-info", to: "/info" },
  ];
}
</script>

<style scoped lang="scss">
nav {
  width: 250px;
  height: 55px;
  background-color: var(--surface-0);
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    li {
      width: 50%;
      height: 100%;
      list-style-type: none;
      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: var(--blue-400);
        text-decoration: none;
        i {
          margin-right: 5px;
        }
        &:not(.router-link-active):hover {
          background-color: var(--blue-300);
          transition: 0.2s;
          color: var(--surface-0);
        }
      }
      .router-link-active {
        background-color: var(--blue-400);
        color: var(--surface-0);
      }
    }
  }
}
</style>
