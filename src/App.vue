<template>
  <div id="app">
    <h1>Hello</h1>
    <count-sub></count-sub>
    <hr style="margin: 20px 0">
    <count-add></count-add>
  </div>
</template>

<script>
  import Subtraction from "./components/Subtraction";
  import Addition from "./components/Addition";

  export default {
    name: 'app',
    components: {
      'count-sub': Subtraction,
      'count-add': Addition
    }
  }
</script>

<style scoped>

</style>
