<template>
    <div class="posting">
		<h2>发帖</h2>
	
			<textarea class="textareaOne" v-model="title" placeholder="请输入帖子标题"></textarea>
			<textarea class="textareaTwo" v-model="content" placeholder="请输入内容"></textarea>
			<input type="submit" value="发送" @click="sendTopis">
		
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
		methods: {
			sendTopis () {
				 this.$store.dispatch('pubTopic', {
					title:this.title,
					content:this.content
				});
				this.title = '';
				this.content = '';
				this.$router.push('/list');
			}
		}
	}
</script>