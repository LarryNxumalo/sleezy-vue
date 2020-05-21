<template>
    <header class="head">
        <router-link to="/">
            <img class="logo" src="../assets/images/logo/logo.png" srcset="../assets/images/logo/logo@2x.png 2x"  alt="logo">
        </router-link>

        <div
            class="link-wrapper"
            :class="{ 'is-mobile': isMobile }"
            v-if="!isMobile"
        >
            <router-link to="/">
                <button class="btn navigation">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="25.5"
                        viewBox="0 0 30 25.5"
                    >
                        <defs></defs>
                        <path
                            class="a"
                            d="M15,30V21h6v9h7.5V18H33L18,4.5,3,18H7.5V30Z"
                            transform="translate(-3 -4.5)"
                        />
                    </svg>
                    HOME
                </button>
            </router-link>

            <router-link to="/profile">
                <button class="btn navigation">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="30"
                        viewBox="0 0 27 30"
                    >
                        <defs></defs>
                        <g transform="translate(-4.5 -3)">
                            <path
                                class="a"
                                d="M30,31.5v-3a6,6,0,0,0-6-6H12a6,6,0,0,0-6,6v3"
                            />
                            <path
                                class="a"
                                d="M24,10.5a6,6,0,1,1-6-6A6,6,0,0,1,24,10.5Z"
                            />
                        </g>
                    </svg>
                    PROFILE
                </button>
            </router-link>

            <router-link to="/music">
                <button class="btn navigation">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                    >
                        <defs></defs>
                        <path
                            class="a"
                            d="M30,3H12A3.009,3.009,0,0,0,9,6V24a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V6A3.009,3.009,0,0,0,30,3Zm-3,7.5H22.5v8.25A3.75,3.75,0,1,1,18.75,15a3.671,3.671,0,0,1,2.25.765V7.5h6ZM6,9H3V30a3.009,3.009,0,0,0,3,3H27V30H6Z"
                            transform="translate(-3 -3)"
                        />
                    </svg>
                    MUSIC
                </button>
            </router-link>

            <router-link to="/gallery">
                <button class="btn navigation">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="27"
                        viewBox="0 0 33 27"
                    >
                        <defs></defs>
                        <path
                            class="a"
                            d="M31.5,4.5H4.5a2.99,2.99,0,0,0-3,3v18a3,3,0,0,0,3,3H12v3H24v-3h7.5a3,3,0,0,0,2.985-3l.015-18A3,3,0,0,0,31.5,4.5Zm0,21H4.5V7.5h27Zm-7.5-9-10.5,6v-12Z"
                            transform="translate(-1.5 -4.5)"
                        />
                    </svg>
                    GALLERY
                </button>
            </router-link>

            <router-link to="/contact">
                <button class="btn navigation">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="27"
                        viewBox="0 0 36 27"
                    >
                        <defs></defs>
                        <path
                            class="a"
                            d="M33,4.5H3a3.009,3.009,0,0,0-3,3v21a3.009,3.009,0,0,0,3,3H33a3,3,0,0,0,2.985-3L36,7.5A3.009,3.009,0,0,0,33,4.5ZM12,9a4.5,4.5,0,1,1-4.5,4.5A4.494,4.494,0,0,1,12,9Zm9,18H3V25.5c0-3,6-4.65,9-4.65s9,1.65,9,4.65Zm5.775-6h2.46L31.5,24l-2.985,2.985A11.267,11.267,0,0,1,24.42,21a10.924,10.924,0,0,1,0-6,11.211,11.211,0,0,1,4.095-5.985L31.5,12l-2.265,3h-2.46a8.834,8.834,0,0,0,0,6Z"
                            transform="translate(0 -4.5)"
                        />
                    </svg>
                    CONTACT
                </button>
            </router-link>
        </div>
        <!--end.link-wrapper-desktop-->
        <div
            class="mobile-burger"
            :class="{ 'show-nav': showNav }"
            @click="toggleNav"
        >
            <svg
                class="burger"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="19" cy="19" r="18.5" stroke="white" />
                <rect x="9" y="11" width="20" height="2" fill="white" />
                <rect x="9" y="18" width="20" height="2" fill="white" />
                <rect x="9" y="25" width="20" height="2" fill="white" />
            </svg>
        </div>
        <!--end.mobile.burger-->
        <transition name="fade">
            <div class="mobile-nav" v-if="showNav">
                <svg
                    @click="toggleNav"
                    class="close"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="19" cy="19" r="18.5" stroke="white" />
                    <line
                        x1="12.449"
                        y1="10.5376"
                        x2="27.9907"
                        y2="26.1407"
                        stroke="white"
                        stroke-width="2"
                    />
                    <line
                        x1="26.7367"
                        y1="11.666"
                        x2="11.6287"
                        y2="27.6893"
                        stroke="white"
                        stroke-width="2"
                    />
                </svg>

                <router-link to="/">
                    <button class="btn-mobile">
                        HOME
                    </button>
                </router-link>
                <router-link to="/profile">
                    <button class="btn-mobile">
                        PROFILE
                    </button>
                </router-link>
                <router-link to="/music">
                    <button class="btn-mobile">
                        MUSIC
                    </button>
                </router-link>
                <router-link to="/gallery">
                    <button class="btn-mobile">
                        GALLERY
                    </button>
                </router-link>
                <router-link to="/contact">
                    <button class="btn-mobile">
                        CONTACT
                    </button>
                </router-link>


            </div>
        </transition>
    </header>
</template>

<script>
export default {
    props: ["isMobile"],

    data() {
        return {
            showNav: false
        };
    },
    methods: {
        toggleNav() {
            this.showNav = !this.showNav;
        }
    },

    mounted() {




        if (window.innerWidth <= 600) {
            console.log("isMobile");
            this.isMobile = true;
        }
    }
};
</script>
