import getCategoryListPageComponent from '/pages/page-category-list.js';
import getCategoryDetailsPageComponent from '/pages/page-category-details.js';

let socket = socketCluster.connect();

const pageOptions = {
  socket
};

const PageCategoryList = getCategoryListPageComponent(pageOptions);
const PageCategoryDetails = getCategoryDetailsPageComponent(pageOptions);

let routes = [
  { path: '/category/:categoryId', component: PageCategoryDetails, props: true },
  { path: '/', component: PageCategoryList, props: true }
];

let router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  template: `
    <div>
      <router-view></router-view>
    </div>
  `
});
