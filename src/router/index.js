import Vue from 'vue'
import Router from 'vue-router'
import text from '@/components/text'
import downSaveConfirm from '@/components/pages/downSaveConfirm'
import workOrderManage from '@/components/pages/workOrderManage'
import cardTaskName from '@/components/pages/cardTaskName'
import planDetails from '@/components/pages/planDetails'
import qualityExamine from '@/components/pages/qualityExamine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: planDetails
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
      path: '/cardTaskName',
      name: 'cardTaskName',
      component: cardTaskName
    },
    {
      path: '/planDetails',
      name: 'planDetails',
      component: planDetails
    },
    {
      path: '/qualityExamine',
      name: 'qualityExamine',
      component: qualityExamine
    },
    {
      path: '*',
      redirect: {
        name: 'text',
      },
    }
  ]
})
