
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/table',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/table.vue') }
    ]
  }
]

export default routes
