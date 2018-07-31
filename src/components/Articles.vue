<template>
    <div>
        <p>Liste des articles :</p>

        <div v-if="$apollo.loading">Loading...</div>

        <div v-for="entity in nodeQuery.entities" :key="entity.nid">
            <p>
                <router-link :to="{ name: 'Article', params: {id: entity.nid}}" >{{ entity.title }}</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import { LIST_ARTICLE_QUERY } from '@/graphql/article-queries'

export default {
  name: 'Articles',
  data () {
    return {
      nodeQuery: {
        entities: []
      },
      loading: 0
    }
  },
  apollo: {
    nodeQuery: {
      query: LIST_ARTICLE_QUERY,
      prefetch: true
    }
  }
}
</script>
