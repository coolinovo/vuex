<template>
  <div class="add">
    <h3>当前最新的 count 值为: {{$store.state.count}}</h3>
    <button @click="add">+</button>
    <button @click="addN">+3</button>
    <button @click="addAsync">延时+3</button>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data() {
      return {}
    },
    methods: {
      add() {
        this.$store.commit('add')
      },
      addN() {
        this.$store.commit('addN', 3)
      },
      addAsync() {
        this.$store.dispatch('addAsync', 3)
      }
    }
  }
</script>

<style scoped>

</style>