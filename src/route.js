import VueRouter from 'vue-router';

const Home = () => import("./components/Home");
const Project = () => import("./components/Project");
const About = () => import("./components/About");


const routes = [
    { path: '/', component: Home },
    { path: '/project', component: Project },
    { path: '/about', component: About },
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})