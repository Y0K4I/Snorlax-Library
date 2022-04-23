<template>
  <header>
    <div class="header">
      <div class="header__logo">
        <img src="@/assets/images/logo.png" alt="Logo" />
        <span>Snorlax Library</span>
      </div>
      <div class="header__nav">
        <HeaderNav />
      </div>
    </div>
  </header>
</template>

<script>
import { Options, Vue } from "vue-property-decorator";
import HeaderNav from "./HeaderNav";

@Options({
  components: {
    HeaderNav,
  },
})
export default class HeaderMain extends Vue {}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 100px;
  background-color: var(--blue-400);
  display: flex;
  justify-content: center;
  color: var(--surface-0);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 50px;
  .header {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    &__logo {
      display: flex;
      align-items: center;
      img {
        margin-right: 15px;
      }
    }
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media only screen and (max-width: 576px) {
  header {
    height: 160px;
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
