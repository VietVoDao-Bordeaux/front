<template>
    <div>
        <article-title v-bind:title="nodeById.title"></article-title>

        <div class="container pt-4">
            <div class="contribution" v-if="nodeById && nodeById.body" v-html="nodeById.body.processed"></div>

            <paragraphs v-bind:paragraphs="nodeById.fieldParagraphs"></paragraphs>
        </div>
    </div>
</template>

<script>
import { ARTICLE_QUERY } from '@/graphql/article-queries'

import ArticleTitle from '@/components/elements/articleTitle'
import Paragraphs from '@/components/paragraph/Paragraphs'

export default {
  name: 'Article',
  components: {
    'article-title': ArticleTitle,
    'paragraphs': Paragraphs
  },
  data () {
    return {
      nodeById: {
        title: null,
        fieldParagraphs: []
      },
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
