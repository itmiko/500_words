import Vue from 'vue'
import Router from 'vue-router'
import SignInPage from '../components/pages/sign-in'
import Statistics from '../components/pages/statistics'
import TopTen from '../components/pages/top-ten'
import Lesson from '../components/pages/lesson'
import Comments from '../components/pages/comments'
import Profile from '../components/pages/profile'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignInPage
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/top-ten',
      name: 'TopTen',
      component: TopTen
    },
    {
      path: '/lesson',
      name: 'Lesson',
      component: Lesson
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
