import {createRouter, createWebHistory} from 'vue-router'
import Homepage from '@/Views/Homepage.vue'
import SignUp from '@/components/SignUp.vue'
import BookMarked from '@/Views/BookMarked.vue'
import Completed from '@/components/Completed.vue'
import Ongoing from '@/components/Ongoing.vue'
import Unread from '@/components/Unread.vue'
import Login from '@/components/Login.vue'
import UserProfile from '@/components/UserProfile.vue'
import Library from '@/Views/Library.vue'
import BookDetail from '@/components/BookDetail.vue'
import Reading from '@/components/Reading.vue'
import EditProfile from '@/components/EditProfile.vue'
import Favourite from '@/components/Favourite.vue';
import readingHistory from '@/components/ReadingHistory.vue'
const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
      },
      {
        path: '/bookmarked',
        name: 'Bookmarked',
        component: BookMarked,
        children: [
          {
            path: '',
            redirect: '/unread'
          },
          {
            path: '/unread',
            name: 'Unread',
            component: Unread
          },
          {
            path: '/completed',
            name: 'Completed',
            component: Completed
          },
          {
            path: '/ongoing',
            name: 'Ongoing',
            component: Ongoing
          }
          // other nested routes under /bookmarked...
        ]
      },
      {
        path:'/readingHistory',
        name: 'readingHistory',
        component: readingHistory
      },
      {
        path: '/library',
        name: 'Library',
        component: Library
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: '/userprofile',
        name: 'UserProfile',
        component: UserProfile
      },
      {
        path:'/library',
        name:'Library',
        component: Library
      },
      {
        path: '/reading/:name',
        name: 'Reading',
        component: Reading,
        props: true
      },
      {
        path: '/book/:id',
        name: 'BookDetail',
        component: () => import('@/components/BookDetail.vue'),
        props: true
      },
      {
        path: '/read/:name/:bookId/:userId/:chapter',
        name: 'ReadingPanel',
        component: Reading,
        props: true,
      },
      {
        path: '/editProfile',
        name: 'EditProfile',
        component: EditProfile,
        props: true,
      },
      {
        path: '/favourite',
        name: 'Favourite',
        component: Favourite,
      },



      
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
