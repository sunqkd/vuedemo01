import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
// import aa from "@/components/aa";
// import cc from "@/components/cc";
Vue.use(Router)

// const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld');
// const aa = r => require.ensure([], () => r(require('@/components/aa')), 'aa');
// const cc = r => require.ensure([], () => r(require('@/components/cc')), 'cc');

const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld');
const aa = () => import(/* webpackChunkName: "aa" */'@/components/aa');
const cc = () => import(/* webpackChunkName: "cc" */'@/components/cc');

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/aa',
			name: 'aa',
			component: aa
		},
		{
			path: '/cc',
			name: 'cc',
			component: cc
		}
	]
})
