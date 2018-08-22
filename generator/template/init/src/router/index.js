import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = []

// eslint-disable-next-line no-new
const router = new VueRouter({
  <%_ if (history) { _%>
  mode: 'history',
  <%_ } _%>
  base: process.env.BASE_URL,
  routes
})

export default router
