<template>
  <div id="app">
    <div id="nav">
      <BaseHeader></BaseHeader>
      <BaseText></BaseText>
      <BaseButton></BaseButton>
      <BaseInput></BaseInput>
      <BasePagination></BasePagination>
      <BaseTabs></BaseTabs>
      <BaseFooter></BaseFooter>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseText from "@/components/BaseText";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BasePagination from "@/components/BasePagination";
import BaseFooter from "@/components/BaseFooter";

export default {
  components: {
    BaseHeader,
    BaseText,
    BaseButton,
    BaseInput,
    BasePagination,
    BaseFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  > div {
    padding: 10px 20px;
  }
}
</style>
