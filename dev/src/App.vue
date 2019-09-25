<template>
  <div id="app">
    <div id="nav">
      <BaseHeader></BaseHeader>
      <BaseText></BaseText>
      <BaseButton></BaseButton>
      <!-- <BaseInput></BaseInput> -->
      <BasePagination></BasePagination>
      <BaseTabs></BaseTabs>
      <BaseFooter></BaseFooter>
    </div>
  </div>
</template>

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
