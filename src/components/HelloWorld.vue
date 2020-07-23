<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<input type="text" v-model="fullName" />
		{{fullName}}

		{{firstName}}--{{lastName}}
		<router-link :to="{name:'aa',params:{id:123}}">aa</router-link>
		<button @click="goaa()">点击跳转</button>
	</div>
</template>

<script>
	export default {
		name: "HelloWorld",
		data() {
			return {
				msg: "Welcome to Your Vue.js App",
				firstName: 'Foo',
				lastName: 'Bar'
			};
		},
		computed: {
			// fullName() {
			// 	return this.firstName + ' ' + this.lastName
			// }

			fullName: {
				get() {//回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
					return this.firstName + ' ' + this.lastName
				},
				set(val) {//监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
					//val就是fullName的最新属性值
					console.log(val)
					const names = val.split(' ');
					console.log(names)
					this.firstName = names[0];
					this.lastName = names[1];
				}
			},
		},
		watch: {
			lastName(val) {
				console.log(val)
			}
		},
		created() {
			this.text();
			// this.mp();
			// this.xz();
			// this.qc();
			this.asd();
		},
		methods: {
			text() {
				this.check().then((res) => {
					console.log(res)
				}).catch((res) => {
					console.log(res)
				})
			},
			check() {
				return new Promise((resolve, reject) => {
					if (false) {
						resolve({
							a: 66
						})
					} else {
						reject({
							a: 6666
						})
					}
				})
			},
			mp() { // 冒泡排序 亮亮交换
				console.log("冒泡排序算法");
				var arr = [1, 5, 2, 8, 1, 3, 4, 8];
				var flag = true;
				for (var i = 0; i < arr.length - 1 && flag; i++) {
					flag = false;
					for (var j = 1; j < arr.length - i - 1; j++) {
						if (arr[j - 1] > arr[j]) {
							let temp = arr[j - 1];
							arr[j - 1] = arr[j];
							arr[j] = temp;
							flag = true;
						}
					}
				}
				console.log(arr)
			},
			xz() {
				var arr = [1, 5, 2, 8, 1, 3, 4, 8];
				for (var i = 0; i < arr.length - 1; i++) {
					for (var j = i + 1; j < arr.length; j++) {
						if (arr[i] > arr[j]) {
							let temp = arr[i];
							arr[i] = arr[j];
							arr[j] = temp;
						}
					}
				}
				console.log(arr)
			},
			qc(){ // 数组去重
				var arr = [4,4,5,5,6,6,7,4,4,1];
				for(var i = arr.length-1;i>0;i--){
					for(var j=i-1;j>=0;j--){
						if(arr[i] == arr[j]){
							arr.splice(j,1)
						}
					}
				}
				console.log(arr)
			},
			asd(){
				console.log( [] instanceof Array);
				console.log( {} instanceof Array);

				console.log(Array.isArray([]) );
				console.log(Array.isArray({}) );

			},
			goaa(){
				// this.$router.push('/aa');
				this.$router.replace("/aa")
			}
		},
		mounted() {

		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>