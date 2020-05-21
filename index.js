import Vue from 'vue'
import VueMediaEmbed from 'vue-media-embed'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({ ... })

Vue.use(VueMediaEmbed, { store })