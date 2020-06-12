import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

import Contact from "../views/Contact.vue";
import Gallery from "../views/Gallery.vue";
import Music from "../views/Music.vue";
import Profile from "../views/Profile.vue";

export default new Router({
    routes: [
        {
            path: "/",
            // redirect: 'products',
            name: "home",
            component: Home
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/gallery",
            name: "gallery",
            component: Gallery
        },
        {
            path: "/music",
            name: "music",
            component: Music
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile
        }
    ]
});
