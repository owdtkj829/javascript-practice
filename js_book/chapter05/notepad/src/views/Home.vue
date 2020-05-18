谷口
<template>
  <div class="home">
    <Header>My memos</Header>
    <ul> 
      <li v-for="memo in newest" :key="memo.id">
        <router-link :to="{name: 'Edit', params: { id: memo.id }}">
          {{ memo.body }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  name: "home",
  components: {
    Header
  },
  computed: {
    newest: function() {
      return this.$store.state.memos.slice().reverse();
    }
  }
}
</script>

<style>
textarea {
    width: 100%;
    height: 10em;
}
button {
    border: 1px solid #333;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    margin-top: 10px;
}
</style>

<style scoped>	
ul {	
    list-style: none;	
    margin: 0;	
    padding: 0;	
}	
a {	
    display: block;	
    border-bottom: 1px solid #ccc;	
    padding: 20px;	
    color: inherit;	
    text-decoration: none;	
    text-align: left;	
    margin-bottom: 5px;	
}	
</style>
