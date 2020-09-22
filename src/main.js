import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import VueAxios from 'vue-axios'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);


new Vue({
  render: h => h(App),
}).$mount('#app')

