<template>
    <footer class="footer">
        <div class="ad-wrapper">
            <img
                class="out-logo"
                src="../assets/images/logo/out-logo.png"
                srcset="../assets/images/logo/out-logo@2x.png 2x"
                alt="out"
            />
            <img
                src="../assets/images/out.png"
                srcset="../assets/images/out@2x.png 2x"
                alt="out"
            />
        </div>
        <div class="youtube-wrapper">
            <img
                src="../assets/images/youtube.png"
                srcset="../assets/images/youtube@2x.png 2x"
                alt="out"
            />
        </div>

        <div
            class="subscribe-wrapper"
            :class="{ 'footer-mobile': footerMobile }"
            v-if="!footerMobile"
        >
            <input type="email" placeholder="Enter email address" value="" />
            <button class="sub-btn">
                Subscribe
            </button>


            <div class="social-icon">
                <i class="fab fa-instagram"></i>


            </div>
                <div class="social-icons">
                     <!-- <font-awesome-icon :icon="['fas', 'user-secret']" />
                <font-awesome-icon :icon="['fa', 'font-awesome']" /> -->


                </div>

            <!-- <li class="pv3 ph2 ma0 link grow">
                <font-awesome-layers full-width class="fa-4x">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                    <font-awesome-layers-text
                        class="red8"
                        value="2"
                        position="top-right"
                    />
                </font-awesome-layers>
            </li> -->
        </div>
    </footer>
</template>

<script>
export default {
    props: ["footerMobile"],

    // data() {
    //     return {
    //         footerMobile:
    //     };
    // },
    // methods: {
    //     toggleNav() {
    //         this.showNav = !this.showNav;
    //     }
    // },



    mounted() {
        if (window.innerWidth <= 768) {
            this.footerMobile = true;
        }
    }
};
</script>
