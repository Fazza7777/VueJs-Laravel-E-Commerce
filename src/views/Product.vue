<template>
  <div class="container my-5" v-if="isLoading">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="d-inline text-primary">Product List</h4>
            <span class="float-right text-success"><i class="uil uil-shopping-cart-alt mr-3 uil-nav"></i> Shop Now</span>
          </div>
        </div>
      </div>
      <div class="col-md-3" v-for="(p,ind) in product.data" :key="ind">
          <div class="card shadow">
            <div class="card-header">
              {{p.name}}
            </div>
            <div class="card-body">
               <p class="text-center">
                 <img :src="assetUrl+'product/'+p.images.split(',')[0]" width="100" height="100" alt="">
               </p>
            </div>
          </div>
      </div>
      <div class="col-12">
      
      </div>
    </div>
  </div>
  <loading v-else/>
</template>
<script>
import Loading from '../components/Loading.vue';
import mixins from '../mixin/mixin';
export default {
  components: { Loading },
    mixins:[mixins],
    name : "Product",
    data(){
        return{
           id : null,
           name : null,
           product :[],
           assetUrl : this.$assetUrl,
           isLoading:false,
        }
    },
    methods:{
      async loadProduct(){
        let url = `${this.$baseUrl}${this.name}/${this.id}`;
        this.product = await this.fetchData(url);
        console.log(this.product);
        this.isLoading = true;
      }
    },
    beforeMount(){
       this.id = this.$route.params.id;
       this.name = this.$route.params.name;
       this.loadProduct();
    }
}
</script>