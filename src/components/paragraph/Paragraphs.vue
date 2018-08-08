<template>
    <div>
        <div v-for="paragraph in paragraphs" :key="paragraph.targetId" class="paragraphs">
            <paragraph-text-with-icon v-if="paragraph.entity.type.targetId === 'text_with_icons'" v-bind:paragraph="paragraph.entity"></paragraph-text-with-icon>
            <paragraph-icon-block v-if="paragraph.entity.type.targetId === 'icon_block'" v-bind:paragraph="paragraph.entity"></paragraph-icon-block>
        </div>
    </div>
</template>

<script>
import ParagraphTextWithIcon from './ParagraphTextWithIcon.vue'
import ParagraphIconBlock from './ParagraphIconBlock.vue'

export default {
  name: 'paragraphs',
  components: {
    ParagraphIconBlock,
    ParagraphTextWithIcon
  },
  props: [ 'paragraphs' ]
}
</script>
