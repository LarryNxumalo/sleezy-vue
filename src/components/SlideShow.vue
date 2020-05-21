<template>
  <!-- <no-ssr> -->
  <vue-displacement-slideshow
    :images="images"
    :displacement="require('@/assets/displace.jpg')"
    :intensity="0.8"
    :speedIn="1.7"
    :speedOut="2.1"
    ease="expo.out"
    ref="slideshow"
  >
  </vue-displacement-slideshow>
  <!-- </no-ssr> -->
</template>

<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";

export default {
  components: {
    VueDisplacementSlideshow
  },

  computed: {
    images() {
      return [
        require("../assets/images/1.png"),
        require("../assets/images/2.png"),
        require("../assets/images/3.png")
      ];
    }
  },
  methods: {
    init() {
      //We loop through all our images by calling the 'next' method of our component every 2 seconds
      setInterval(() => {
        this.$refs.slideshow.next();
      }, 15000);
    },
    nextImage() {
      this.$refs.slideshow.next();
    },
    previousImage() {
      this.$refs.slideshow.previous();
    }
  },
  mounted() {
    this.init(); //initialise function   :P
  }
};
</script>
