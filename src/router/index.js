import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      meta:{
        title:'Backerry'
      },children:[
         {
          path:'/',
          component: () => import('../views/HomeView.vue')
         },
         {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
          meta:{
            title:'A propos'
          }
         
         },

         {
          path: '/boutique',
          name: 'boutique',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ShopView.vue'),
          meta:{
            title:'Boutique'
          }
         
         },
       
         {
          path: '/contact',
          name: 'contact',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ContactView.vue'),
          meta:{
            title:'Contactez-Nous'
          }
         
         },

         {
          path: '/category/categorie',
          name: 'categorie',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/category/CategorieView.vue'),
          meta:{
            title:'Category'
          }
         
         },

         {
          path: '/login',
          name: 'login',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/LoginView.vue'),
          meta:{
            title:'Connexion'
          }
         
         },
        
      ]
    },
  ]
})


router.beforeEach((to,from) => {
document.title= to.meta?.title??"Backerry"

})

export default router
