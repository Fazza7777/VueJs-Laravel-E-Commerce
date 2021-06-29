<template>
<div>
  <Nav :logged='logged' :cartCount='cartCount' />
  <router-view :logged='logged' 
  @changeLogin="changeLoginStatus" 
  @changeCartCount="changeProductCount"
  />
</div>
</template>
<script>
import Nav from './components/Nav.vue'
export default {
  components: { Nav },
  name:'App',
  data(){
    return{
      logged:false,
      cartCount:0
    }
  },
  methods:{
    changeProductCount(){
      let data = localStorage.getItem('product');
      let ary = data ? JSON.parse(data) : [];
      this.cartCount = ary.length;
    },
   changeLoginStatus(){
     this.logged = !this.logged;
   }
  },
  beforeMount(){
    this.changeProductCount();
  }
}
</script>