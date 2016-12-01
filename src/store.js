import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		topics: [
			{title:"123",content:'hjk'},
			{title:'456',content:'iop'}
		]
	},
	mutations:{
		PubTopic:function(state,obj){
			const topic = {
				title:obj.title,
				content:obj.content
			}
			console.log(topic)
			state.topics.push(topic);
		}

	},
	actions: {
		pubTopic (context, obj) {
			context.commit('PubTopic', obj);
			console.log('12334');
		}
	}

})