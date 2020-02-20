<template>
  <div class="sub">
    <h3>当前最新的 count 值为: {{count}}</h3>
    <button>-</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'subn',
    data() {
      return {}
    },
    computed: {
      ...mapState(['count'])
    }
  }
</script>

<style scoped>

</style>