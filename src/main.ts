// import Vue from 'vue'

// import router from './router'
// import App from "./App.vue"
// import "../styleguide.css" 
// import "../globals.css" 

// Vue.config.productionTip = false;
// new Vue({ render: h => h(App),}).$mount("#app");

// import axios from 'axios'
// import VueAxios from 'vue-axios'

// const app = createApp(App)

// app.use(router)
// .use(VueAxios, axios)
// .provide('axios', app.config.globalProperties.axios)
// .mount('#app')

import App from "./App.vue";

import "../styleguide.css"
import "../globals.css";

Vue.config.productionTip = false;
new Vue({ render: h => h(App),}).$mount("#app");
