import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs.vue'
import JobDetails from '../views/JobDetails.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/jobs',
        name:'Jobs',
        component:Jobs
    },
    {
        path:'/jobs/:id',
        name:'JobDetails',
        component:JobDetails,
        props:true
    },
    //redirect
    {
        path:'/all-jobs',
        redirect:'/jobs'
    },
    //catchall 404
    {
        path:'/:catchAll(.*)',
        name:'NotFound',
        component:NotFound
    }

]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//     else next()
// })
  


export default router