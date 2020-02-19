
export default [
    //Home Route
    {path: '/', name: 'root',  redirect: '/home'},
    {path: '/home', name: 'home', component: () => import(/* webpackChunkName: 'home' */'../views/Home.vue')},
    {path: '/about', name: 'about', component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')},
    {path: '/product/:id', name:'product.information.id', component: () => import(/* webpackChunkName: 'product' */ '../views/ProductInformation.vue')},
    {path: '*', name: 'error', component: () => import(/* webpackChunkName: 'error' */ '../views/Page404.vue')}
]


