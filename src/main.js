import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import * as VueGoogleMaps from 'vue2-google-maps'

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "",
//     libraries: "places" // necessary for places input
//   }
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
