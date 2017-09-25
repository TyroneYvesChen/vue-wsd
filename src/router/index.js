import Vue from 'vue'
import Router from 'vue-router'
import text from '@/components/text'
import downSaveConfirm from '@/components/pages/downSaveConfirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'text',
      component: downSaveConfirm
    },
    {
      path: 'downSaveConfirm',
      name: 'downSaveConfirm',
      component: downSaveConfirm
    }
  ]
})
