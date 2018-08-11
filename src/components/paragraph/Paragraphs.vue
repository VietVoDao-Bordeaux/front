<template>
    <div>
        <div v-for="paragraph in paragraphs" :key="paragraph.targetId" class="paragraphs">
            <paragraph-text-with-icon v-if="paragraph.entity.type.targetId === 'text_with_icons'" v-bind:paragraph="paragraph.entity"></paragraph-text-with-icon>
            <paragraph-icon-block v-if="paragraph.entity.type.targetId === 'icon_block'" v-bind:paragraph="paragraph.entity"></paragraph-icon-block>
            <paragraph-timeline v-if="paragraph.entity.type.targetId === 'timeline'" v-bind:paragraph="paragraph.entity"></paragraph-timeline>
        </div>
    </div>
</template>

<script>
import ParagraphTextWithIcon from './ParagraphTextWithIcon.vue'
import ParagraphIconBlock from './ParagraphIconBlock.vue'
import ParagraphTimeline from './ParagraphTimeline.vue'

export default {
  name: 'paragraphs',
  components: {
    ParagraphIconBlock,
    ParagraphTextWithIcon,
    ParagraphTimeline
  },
  props: [ 'paragraphs' ]
}
</script>
