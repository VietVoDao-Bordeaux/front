<template>
  <div>
    <div v-if="paragraph.fieldChild" v-for="child in paragraph.fieldChild" :key="child.targetID">
      <div>
        <p class="h2">{{child.entity.fieldTitle}}</p>
        <div v-html="child.entity.fieldBody.processed"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paragraph-timeline',
  props: {
    paragraph: Object
  }
}
</script>
