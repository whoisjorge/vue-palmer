// Import Views
import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/login/index'

// Routes
export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  }
]
