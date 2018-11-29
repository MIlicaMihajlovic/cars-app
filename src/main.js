import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars.vue'
import AddCar from './components/AddCar.vue'

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {  
  if(!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
})

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/cars'},
    {path: '/cars', component: AppCars, name: 'cars' },
    {path: '/add-car', component: AddCar, name: 'add-car'}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
