<template>
<div>
  <Nav :logged='logged' />
  <router-view :logged='logged' />
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
   
  }
}
</script>