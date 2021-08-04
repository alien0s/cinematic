import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import BannerItem from './views/BannerItem.vue'
import Banner from './components/Banner.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            children: [
                {
                    path: ":id",
                    component: BannerItem
                },
                {
                    path: "banner",
                    component: Banner
                }
            ]
        }
    ]
})