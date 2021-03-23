
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: '',
       component: () => import('pages/Page01.vue') 
      },

      { path: '/page02',
       component: () => import('pages/Page02.vue') 
      },

      { path: '/page03',
       component: () => import('src/pages/Page03.vue') 
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
