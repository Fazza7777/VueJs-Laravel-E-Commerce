<template>
<div>
  <Nav :logged='logged' :cartCount='cartCount' @changeLogin="changeLoginStatus" />
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
      cartCount:0,
      user:[]
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

    let user = localStorage.getItem('user');
    if(user){
    this.user = JSON.parse(user);
    }else{
      this.user = '';
    }
    let token = localStorage.getItem('token');
    if(token) {
      this.logged = true;
      }
    this.changeProductCount();
  }
}
</script>