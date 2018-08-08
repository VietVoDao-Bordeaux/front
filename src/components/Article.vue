<template>
    <div>
        <article-title v-bind:title="nodeById.title"></article-title>

        <div class="container pt-4">
            <paragraphs v-bind:paragraphs="nodeById.fieldParagraphs"></paragraphs>

            <!-- <div v-if="nodeById.fieldParagraphs" v-for="paragraph in nodeById.fieldParagraphs" :key="paragraph.targetId">
                <div v-if="paragraph.entity.fieldLeftContent" v-html="paragraph.entity.fieldLeftContent.processed"></div>
            </div> -->

            <!--<div class="contribution" v-if="nodeById && nodeById.body" v-html="nodeById.body.processed"></div>-->
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
