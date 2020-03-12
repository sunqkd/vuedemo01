import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
// import aa from "@/components/aa";
Vue.use(Router)

const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld');
const aa = r => require.ensure([], () => r(require('@/components/aa')), 'aa');

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
		}
	]
})
