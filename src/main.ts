import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { Button, Dialog, MessageBox} from 'element-ui';

Vue.use(VueAxios, axios);
Vue.use(Button);
Vue.use(Dialog);
Vue.prototype.$confirm = MessageBox.confirm;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
