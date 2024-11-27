import {createRouter, createWebHistory} from 'vue-router';
import ListView from '@/components/BaiHoc/Day14/ListView.vue';
import FormView from '@/components/BaiHoc/Day14/CreateView.vue';
import UpdateView from '@/components/BaiHoc/Day14/UpdateView.vue';
import DetailView from '@/components/BaiHoc/Day14/DetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ListView, name: 'list-view'},
    { path: '/create',  component: FormView, name: 'form-view'},
    { path: '/update/:id', component: UpdateView, name: 'update-view'},
    { path: '/detail/:id', component: DetailView, name: 'detail-view'}
  ]
});

export default router;

