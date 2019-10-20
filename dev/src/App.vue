<template>
  <div id="app">
    <div id="nav">
      <h1>Vue automatic import loader</h1>
      <BaseHeader></BaseHeader>
      <BaseTabs></BaseTabs>
      <BaseInput></BaseInput>
      <BaseText></BaseText>
      <BaseButton></BaseButton>
      <BasePagination></BasePagination>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  > div {
    width: 500px;
    padding: 10px 10px 10px 170px;
    margin: 10px;
    font-size: 30px;
    font-weight: bold;
    border: 1px solid black;
    text-align: left;
    box-sizing: border-box;
  }
}
</style>
