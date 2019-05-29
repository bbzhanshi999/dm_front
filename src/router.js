import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/index',
            name: 'index',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Index.vue'),
            children: [
                {
                    path:'createEmployee',
                    name:'createEmployee',
                    component:()=> import('./views/CreateEmployee.vue')
                },
                {
                    path:'employeeList',
                    name:'employeeList',
                    component:()=> import('./views/EmployeeList.vue')
                },
                {
                    path:'drug',
                    name:'drug',
                    component:()=> import('./views/Drug.vue')
                },
                {
                    path:'depart',
                    name:'depart',
                    component:()=> import('./views/Depart.vue')
                },{
                    path:'charge',
                    name:'charge',
                    component:()=> import('./views/Charge.vue')
                },{
                    path:'restore',
                    name:'restore',
                    component:()=> import('./views/Restore.vue')
                },{
                    path:'detail',
                    name:'detail',
                    component:()=> import('./views/Detail.vue')
                },
            ]
        }
    ]
})
