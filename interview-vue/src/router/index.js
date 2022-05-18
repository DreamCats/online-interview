import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/add-tag',
    name: 'AddTag',
    component: () => import('../views/AddTagView.vue')
  },
  {
    path: '/content-list',
    name: 'ContentList',
    component: () => import('../views/ContentListView.vue')
  },
  {
    path: '/add-content',
    name: 'AddContent',
    component: () => import('../views/AddContentView.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/add-blog',
    name: 'AddBlog',
    component: () => import('../views/AddBlogView.vue')
  },
  {
    path: '/home',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/tag',
        component: () => import('../views/TagView.vue'),
      },
      {
        path: '/content',
        component: () => import('../views/ContentView.vue'),
      },
      {
        path: '/blog',
        component: () => import('../views/BlogView.vue'),
      },
      {
          path: '/user',
          component: () => import('../views/UserView.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
