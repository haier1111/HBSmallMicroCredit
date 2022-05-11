
export default [
        {
            path: '/form1',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/BaseForm1.vue'),
            meta: { title: '操作岗测试' }
        },
       
    ]

