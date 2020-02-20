<template>
  <div id="app">
    <h1>Hello</h1>
    <count-sub></count-sub>
    <hr style="margin: 20px 0">
    <count-add></count-add>
    <hr>
    <p>{{$store.getters.showNum}}</p>
    <p>{{showNum}}</p>
  </div>
</template>

<script>
  import Subtraction from "./components/Subtraction";
  import Addition from "./components/Addition";
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    components: {
      'count-sub': Subtraction,
      'count-add': Addition
    },
    computed: {
      ...mapGetters([ 'showNum' ])
    }
  }
</script>

<style scoped>

</style>
