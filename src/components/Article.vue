<template>
    <div>
        <h1 class="h1" v-if="nodeById">
            {{nodeById.title}}
        </h1>

        <div class="contribution" v-if="nodeById" v-html="nodeById.body.processed"></div>
    </div>
</template>

<script>
import { ARTICLE_QUERY } from '@/graphql/article-queries'

export default {
  name: 'Article',
  data () {
    return {
      nodeById: {},
      id: this.$route.params.id
    }
  },
  apollo: {
    nodeById: {
      query: ARTICLE_QUERY,
      variables () {
        return {
          id: this.$route.params.id.toString()
        }
      },
      prefetch: true
    }
  }
}
</script>
