import Vue from 'vue'
import Router from 'vue-router'
import text from '@/components/text'
import downSaveConfirm from '@/components/pages/downSaveConfirm'
import workOrderManage from '@/components/pages/workOrderManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: workOrderManage
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/downSaveConfirm',
      name: 'downSaveConfirm',
      component: downSaveConfirm
    },
    {
      path: '/workOrderManage',
      name: 'workOrderManage',
      component: workOrderManage
    },
    {
      path: '*',
      redirect: {
        name: 'text',
      },
    }
  ]
})
