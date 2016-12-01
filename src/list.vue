
<template>
  <div class="homepage">
    <div class="teom">
      <em>标题</em>
      <span>时间</span>
    </div>
    <ul>
      <li v-for="(item,index) in list" @click="listMan(item,index)">
          <em>{{item.title}}</em>
          <span>{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        list: this.$store.state.topics
      }
    },
    methods: {
      listMan (item,index) {
        this.$router.push('/subset/' + index);
      }
    }
  }
</script>






