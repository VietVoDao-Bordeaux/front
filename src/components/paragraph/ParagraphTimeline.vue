<template>
  <div>
    <div id="timeline-carousel-detail" class="owl-carousel owl-theme">
      <div v-if="paragraph.fieldChild" v-for="child in paragraph.fieldChild" :key="child.targetID">
        <div class="row justify-content-center">
          <div class="col-8">
            <p class="h2">{{child.entity.fieldTitle}}</p>
            <div v-html="child.entity.fieldBody.processed"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="timeline-carousel-accessor" class="owl-carousel owl-theme">
      <div v-if="paragraph.fieldChild" v-for="child in paragraph.fieldChild" :key="child.targetID">
        <p>{{child.entity.fieldDate}}</p>
        <p v-if="child.entity.fieldDateEnd">{{child.entity.fieldDateEnd}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

export default {
  name: 'paragraph-timeline',
  props: {
    paragraph: Object
  },
  mounted: function () {
    jQuery('#timeline-carousel-detail').owlCarousel({
      autoHeight: true,
      items: 1
    })

    jQuery('#timeline-carousel-accessor').owlCarousel({
      autoHeight: true,
      items: 5
    })
  }
}
</script>
