<template>
<div>
  <Nav :logged='logged' />
  <router-view :logged='logged' @changeLogin="changeLoginStatus" />
</div>
</template>
<script>
import Nav from './components/Nav.vue'
export default {
  components: { Nav },
  name:'App',
  data(){
    return{
      logged:false
    }
  },
  methods:{
   changeLoginStatus(){
     this.logged = !this.logged;
   }
  }
}
</script>