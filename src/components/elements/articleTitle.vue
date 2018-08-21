<template>
    <div class="article-header c-white pt-4 mb-4">
        <div class="article-header_bg-image">
            <img :src="articleImage" alt="">
        </div>
        <div class="article-header_content">
            <div class="container position-relative">
                <div class="d-flex align-items-center justify-content-end">
                    <h1 class="h1 mb-0" v-if="title">
                        {{title}}
                    </h1>

                    <div class="article-header_image" v-if="image">
                        <img :src="image.url" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image from '@/assets/images/article.jpg'

export default {
  name: 'ArticleTitle',
  props: ['title', 'image'],
  data () {
    return {
      articleImage: image
    }
  }
}
</script>

<style lang="scss">
    .article-header {
        min-height: rem($article-header-height);
        position: relative;

        &_bg-image {
            position: absolute;
            top: rem(-50px);
            bottom: rem(50px);
            left: 0;
            right: 0;
            z-index: 1;
            overflow: hidden;
            transform: skewY(3deg);

            img {
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                transform: translateY(-50%) skewY(-3deg);
            }

            &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: rgba($c-theme-secondary, 0.8);
                z-index: 2;
            }
        }

        h1 {
            position: absolute;
            top: 45%;
            left: 0;
            width: 40%;
            transform: translateY(-50%);
        }

        &_content {
            position: relative;
            z-index: 10;
        }
    }
</style>
