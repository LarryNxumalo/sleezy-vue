/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
    <div class="main-wrapper">
        <Header :isMobile="false" />
        <div class="home-content">
            <slide-show ref="slideshow" />
            <div class="arrows prev"></div>
            <div class="arrows next"></div>
        </div>
        <Footer />
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
    },
    data() {
        return {
            isMobile: true
        };
    },

    mounted() {
        // page load calls
        if (window.innerWidth <= 768) {
            this.isMobile = true;
        }
    }
};
</script>
