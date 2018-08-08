<template>
    <div class="article-header d-flex align-items-center justify-content-center bg-black pt-5 pb-5">
        <h1 class="h1 mb-0" v-if="title">
            {{title}}
        </h1>
    </div>
</template>

<script>
export default {
  name: 'ArticleTitle',
  props: ['title']
}
</script>

<style lang="scss">
    .article-header {
        min-height: rem($article-header-height);
    }
</style>
