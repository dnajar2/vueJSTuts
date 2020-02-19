
export default [
    //Home Route
    {path: '/', name: 'root',  redirect: '/home'},
    {path: '/home', name: 'home', component: () => import(/* webpackChunkName: 'home' */'../views/Home.vue')},
    {path: '/about', name: 'about', component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')},
    {path: '*', name: 'error', component: () => import(/* webpackChunkName: 'error' */ '../views/Page404.vue')}
]


