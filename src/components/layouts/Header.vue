<template>
    <header id="header" class="bg-white">
        <div class="container">
            <div class="row justify-content-end">
                <nav v-for="links in menuByName.links" :key="links.label" class="nav">
                    <a href="#" class="nav-link">{{ links.label }}</a>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import { MAIN_MENU_QUERY } from '@/graphql/menu'

export default {
  name: 'Header',
  data () {
    return {
      menuByName: {
        name: '',
        links: []
      },
      loading: 0
    }
  },
  apollo: {
    menuByName: {
      query: MAIN_MENU_QUERY,
      prefetch: true
    }
  }
}
</script>

<style lang="scss">
    #header {
        position: relative;
        z-index: 100;
    }
</style>
