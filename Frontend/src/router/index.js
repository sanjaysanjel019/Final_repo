import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'signup',
        component: () =>
            import ('../components/manager.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../components/signin.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () =>
            import ('../components/ForgotPassword.vue')
    },

    {
        path: '/dashboard-driver',
        name: 'driver-dashboard',
        component: () =>
            import ('../components/dashBoardDriver.vue')
    },
    {
        path: '/dashboard-manager',
        name: 'manager-dashboard',
        component: () =>
            import ('../components/dashBoardManager.vue')
    }



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router