<template>
  <div class="contact-wrapper">
    <Header />
      <div class="home-content">
            <slide-show ref="slideshow" />
                <div class="arrows prev"></div>
                <div class="arrows next"></div>
        </div>
        <Footer />

    <div class="contact">
      <form>
        <input type="email" placeholder="Name" value="" />
        <input type="email" placeholder="Enter email address" value="" />
        <textarea type="text" placeholder="Message" id="" rows="3"></textarea>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import Footer from "../components/Footer";

export default {

  components: {
    Header,
    SlideShow,
    Footer
  }
};
</script>
