import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import Item from '../views/Item'

Vue.use(Router)

export default new Router({
    hashbang: true,
    history: true,
    transitionOnLoad: false,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/films',
            name: 'films',
            component: List
        },
        {
            path: '/films/:id',
            name: 'itemfilms',
            component: Item
        },
        {
            path: '/planets',
            name: 'planets',
            component: List
        },
        {
            path: '/planets/:id',
            name: 'itemplanets',
            component: Item
        },
        {
            path: '/people',
            name: 'people',
            component: List
        },
        {
            path: '/people/:id',
            name: 'itempeople',
            component: Item
        },
        {
            path: '/species',
            name: 'species',
            component: List
        },
        {
            path: '/species/:id',
            name: 'itemspecies',
            component: Item
        },
        {
            path: '/starships',
            name: 'starships',
            component: List
        },
        {
            path: '/starships/:id',
            name: 'itemstarships',
            component: Item
        },
        {
            path: '/vehicles',
            name: 'vehicles',
            component: List
        },
        {
            path: '/vehicles/:id',
            name: 'itemvehicles',
            component: Item
        }
    ]
})
