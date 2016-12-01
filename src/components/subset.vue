<template>
  	<div class="subset">
		<h3>帖子详情</h3>
		<p>{{title}}</p>
		<div>{{content}}</div>
		<router-link to='/list'>返回</router-link>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				title:'',
				content:''
			}
		},
		created () {
			this.showDetail();
		},
		watch: {
			'$route':'showDetail' 
		},
		methods: {
			showDetail(){
				var obj = this.$store.state.topics[this.$route.params.id];
				if(!obj){
					this.$route.push('/');
					return;
				}
			
				this.title = obj.title;
				this.content = obj.content;
			}
		}
	}
</script>