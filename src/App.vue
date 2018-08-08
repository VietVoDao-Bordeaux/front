<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'

export default {
  components: {
    'v-header': Header
  },
  data () {
    return {}
  },
  name: 'App'
}
</script>
