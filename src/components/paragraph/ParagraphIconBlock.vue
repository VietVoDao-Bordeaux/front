<template>
    <div class="d-flex align-items-center mb-4">
        <div class="icon icon-large flex-shrink-0">
            <img :src="paragraph.fieldIcon.entity.fieldSvg.entity.url" alt="">
        </div>

        <div class="pl-4 flex-grow-1">
            <p class="text-extra-big c-primary mb-1"><strong>{{ paragraph.fieldTitle }}</strong></p>
            <p class="text-small">{{ paragraph.fieldDesc }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'paragraph-icon-block',
  props: [ 'paragraph', 'isLast' ]
}
</script>
