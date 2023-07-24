import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '../views/Mainpage/Mainpage.vue'
import About from '../views/About/About.vue'
import Firstpage from '../views/Firstpage/Firstpage.vue'
import Ourteam from '../views/Ourteam/Ourteam.vue'
import OurteamItem from '../views/OurteamItem/OurteamItem.vue'
import Active from '../views/Active/Active.vue'
import ActiveItem from '../views/ActiveItem/ActiveItem.vue'
import News from '../views/News/News.vue'
import Events from '../views/Events/Events.vue'
import NewsItem from '../views/NewsItem/NewsItem.vue'
import EventsItem from '../views/EventsItem/EvenstItem.vue'
import Contacts from '../views/Contacts/Contacts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Mainpage,
      children:[
        {
          path:'/',
          name:'firstpage',
          component:Firstpage
        },
        {
          path:'/about',
          name:'about',
          component:About
        },
        {
          path:'/ourteam',
          name:'ourteam',
          component:Ourteam,
        },
        {
          path:'/ourteam-item',
          name: 'ourteam-item',
          component:OurteamItem,
          meta :{
            child :'ourteam'
           },
        },
        {
          path:'/activites',
          name:"activites",
          component:Active
        },
        {
          path:'/active-item',
          name:'active-item',
          component:ActiveItem,
          meta :{
            child :'active2'
           },
        },
        {
          path:'/news',
          name:'news',
          component:News
        },
        {
          path:'/events',
          name :'events',
          component:Events
        },
        {
          path:'/news-item',
          name:'news-item',
          component:NewsItem
        },
        {
          path:'/news-item',
          name:'news-item',
          component:NewsItem
        },
        {
          path:'/events-item',
          name:'events-item',
          component:EventsItem
        },
        {
          path:'/contacts',
          name:'contacts',
          component:Contacts
        }
      ]
    },
  
  ]
})

export default router
