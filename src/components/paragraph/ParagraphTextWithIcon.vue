<template>
    <div class="row justify-content-between">
        <div class="col-6">
            <div v-if="paragraph.fieldLeftContent" v-html="paragraph.fieldLeftContent.processed"></div>
        </div>
        <div class="col-5">
            <paragraphs v-if="paragraph.fieldRightContent" v-bind:paragraphs="paragraph.fieldRightContent"></paragraphs>
        </div>
    </div>
</template>

<script>
export default {
  name: 'paragraph-text-with-icon',
  props: {
    paragraph: Object
  }
}
</script>
