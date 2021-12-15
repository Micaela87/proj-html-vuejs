import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faChevronRight, faChevronLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faUser, faFolder, faComments } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;

library.add(faSearch, faChevronRight, faChevronUp, faChevronLeft, faUser, faFolder, faComments, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
