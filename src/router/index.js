import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import AboutUs from '@/components/AboutUs'
import AboutHello from '@/components/AboutHello'
import AboutContact from '@/components/AboutContact'

Vue.use(Router)

export default new Router({
    mode: 'history'
    ,routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
        ,{
            path: '/about'
            ,name: 'About'
            ,component: About
            ,children: [
                {path: '', component:AboutUs }
                ,{path: 'us', component:AboutUs }
                ,{path: 'hello', component:AboutHello }
                ,{path: 'contact', component:AboutContact }
            ]
        }
    ]
})
